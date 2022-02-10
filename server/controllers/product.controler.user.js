var db =require('../database_mysql')


var getALL=function(req,res){
    db.query("SELECT * FROM user ",(err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
    })
    
    
    }
    
    module.exports={getALL}
