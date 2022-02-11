var db =require('../database_mysql')


var getALLRestaurant=function(req,res){
    db.query("SELECT name,picture,description FROM restaurant ",(err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
    })
    
    
    }
    
    module.exports={getALLRestaurant}
