const router = require("express").Router();
const userControle = require("../controllers/product.controler.user");
router.get("/restaurant", userControle.getALLRestaurant);
router.post("/signUpUser", userControle.signUpUser);
router.post("loginUser", userControle.loginUser);

module.exports = router;
