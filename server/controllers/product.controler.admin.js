var db =require('../database_mysql')
const bcrypt = require("bcrypt")
var esm = ""
var getALL=function(req,res){
    db.query("SELECT * FROM restaurant ",(err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
    })
}

var signUp = function(req,res){
    esm = req.body.name
    db.query(`SELECT * From restaurant where name = "${req.body.name}" `,(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else if(result.length === 0) {
            if(req.body.password.length>8 && req.body.password.length<25 && req.body.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/)){
                const salt = bcrypt.genSaltSync()
                const hashedPaswword = bcrypt.hashSync(req.body.password,salt)
                db.query(`INSERT INTO restaurant (name,password,picture) Values ("${req.body.name}","${hashedPaswword}","${req.body.picture}")`,(err,result)=>{
                    if(err){
                        throw err
                    }else{
                        res.send("nice")
                    }
                })
            }else{
                res.send("please enter a strong password")
            }
        }
    }
)}


var login =(req,res)=>{
    esm = req.body.loginName
    db.query(`SELECT * FROM restaurant WHERE name = '${req.body.loginName}';`,(err,result)=>{
        if(err){
            throw err
        }else{
            var pass = result[0]
            if(bcrypt.compareSync(req.body.loginPassword,pass.password)){
                res.send("nice")
            }else{
                res.send('incorrect')
            }
        }
    })
}

// addRestaurant=(req,res)=>{
//     var params=[req.body.name,req.body.picture,req.body.description]
// esm = req.body.name
// var str="INSERT INTO restaurant (name , picture , description) VALUES (?,?,?)"
// db.query(str,params,(err,result)=>{
//     err?console.log(err):res.status(200).send("restaurant cbon mawjoud")
// })
// }
////////////////// menu  for
var addMenu=(req,res)=>{
    var params=[req.body.food,req.body.price]
    str=`insert into menu (food_name,price,restaurant_id) VALUES (?,?,(SELECT  restaurant_id from restaurant where name="${esm}"))`
    db.query(str,params,(err,result)=>{
        err?console.log(err):res.status(200).send("menu rtzad")
    })
}
 ////////// get all menu for on restaurant //:
var getMenuOneRestaurant=(req,res)=>{
     var str=`select * from menu where restaurant_id =(select restaurant_id from restaurant where name = "${esm}")`
     db.query(str,(err,result)=>{
         err?console.log(err):res.send(result)
     })
 }
 deleteOrder=(req,res)=>{
     var params=[]
 }
module.exports={getALL,signUp,login,addRestaurant,addMenu,getMenuOneRestaurant}
