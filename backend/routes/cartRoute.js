const express = require("express");

const {  addToCart, fetchCartByUser, deleteFromCart, updateCart } = require("../controllers/cartController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();



router.route("/").post(addToCart);      
router.route("/").get(fetchCartByUser);      
router.route("/:id").delete(deleteFromCart);   
router.route("/:id").patch(updateCart);   



module.exports = router;

