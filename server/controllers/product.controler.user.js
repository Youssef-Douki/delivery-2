var db =require('../database_mysql')


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
    
    module.exports={getALLRestaurant,getOneRestaurant}
