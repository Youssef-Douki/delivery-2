const router =require("express").Router()
const userControle=require("../controllers/product.controler.user")
router.get("/restaurant",userControle.getALLRestaurant)






module.exports=router