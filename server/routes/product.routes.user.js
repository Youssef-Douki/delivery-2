const router =require("express").Router()
const userControle=require("../controllers/product.controler.user")
router.get("/restaurant",userControle.getALLRestaurant)

router.get("/menu/:name",userControle.getOneRestaurant)




module.exports=router