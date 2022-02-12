var db = require("../database_mysql");
const bcrypt = require("bcrypt");

var signUpUser = function (req, res) {
  db.query(
    `SELECT * From user where email = "${req.body.email}" `,
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (result.length === 0) {
        if (
          req.body.password.length > 8 &&
          req.body.password.length < 25 &&
          req.body.password.match(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
          )
        ) {
          const salt = bcrypt.genSaltSync();
          const hashedPaswword = bcrypt.hashSync(req.body.password, salt);
          db.query(
            `INSERT INTO user (firstName,lastName ,email,password,phoneNumber,profilePicture) Values ("${req.body.firstName}","${req.body.lastName}","${req.body.email}","${hashedPaswword}","${req.body.phoneNumber}","${req.body.profilePicture}")`,
            (err, result) => {
              if (err) {
                throw err;
              } else {
                res.send("nice");
              }
            }
          );
        } else {
          res.send("please enter a strong password");
        }
      }
    }
  );
};

var loginUser = (req, res) => {
  esm = req.body.loginNameUser;
  db.query(
    `SELECT * FROM user WHERE email = '${req.body.loginEmail}';`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        var pass = result[0];
        if (bcrypt.compareSync(req.body.loginPassword, pass.password)) {
          res.send("nice");
        } else {
          res.send("incorrect");
        }
      }
    }
  );
};

var getALLRestaurant=function(req,res){
    db.query("SELECT name,picture,description FROM restaurant ",(err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
    })
}

var getOneRestaurant = (req,res)=>{
    db.query(`SELECT * FROM menu where restaurant_id = (SELECT restaurant_id from restaurant where name = "${req.params.name}" )`,(err,result)=>{
        err?res.status(500).send(err):res.status(200).send(result)
    })
}

var putInCart = (req,res)=>{
  
  db.query(`SELECT food_name , price  FROM menu WHERE food_name = '${req.params.foodName}' AND restaurant_id = (SELECT restaurant_id FROM  restaurant WHERE name = '${req.params.restaurantName}') `,(err,result)=>{
    err?res.status(500).send(err):res.send(result)
  })
}

var getOneUser = (req,res)=>{
  console.log(req.params)
  db.query(`SELECT * FROM  user where firstName = '${req.params.firstName}'`,(err,result)=>{
    err?res.status(500).send(err):res.send(result)
  })
}
    
    module.exports={getALLRestaurant,getOneRestaurant,signUpUser, loginUser,putInCart,getOneUser}
