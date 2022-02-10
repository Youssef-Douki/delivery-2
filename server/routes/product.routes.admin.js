const router =require("express").Router()
const adminControle=require("../controllers/product.controler.admin")
router.get("/getMenuOneRestaurant",adminControle.getMenuOneRestaurant)
router.post("/addrestaurant",adminControle.addRestaurant)
router.post("/addMenu",adminControle.addMenu)
router.post("/signup",adminControle.signUp)




module.exports=router