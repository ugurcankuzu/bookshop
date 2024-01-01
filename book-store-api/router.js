const router = require("express").Router();
const encryptPassword = require("./middlewares/encryptPassword");
const getAllCategories = require("./routeHandlers/categories/getAllCategories");
const getAllProducts = require("./routeHandlers/products/getAllProducts");
const getProductByName = require("./routeHandlers/products/getProductByName");
const getProductsBySalecount = require("./routeHandlers/products/getProductsBySalecount");
const signup = require("./routeHandlers/signup/signup");
router.get("/allProducts", getAllProducts);
router.get("/products", getProductsBySalecount);
router.get("/allCategories", getAllCategories);
router.get("/products/:productName", getProductByName);
router.post("/signup",encryptPassword, signup);
module.exports = router;
