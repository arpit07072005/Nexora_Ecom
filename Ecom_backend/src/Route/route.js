import { Router } from "express";
import { addProducts } from "../Controller/addproduct.controller.js";
import { addcart, cart, checkout, deleteCart, products } from "../Controller/products.controller.js";
const router =Router();

router.route("/addproducts").post(addProducts);
router.route("/products").get(products);
router.route("/cart").post(addcart);
router.route("/cart").get(cart);
router.route('/cart/:id').delete(deleteCart);
router.route("/checkout").post(checkout);
export default router