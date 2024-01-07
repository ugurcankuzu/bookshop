const router = require("express").Router();
const encryptPassword = require("./middlewares/encryptPassword");
const verifyJWT = require("./middlewares/verifyJWT");
const getCart = require("./routeHandlers/cart/getCart");
const getAllCategories = require("./routeHandlers/categories/getAllCategories");
const login = require("./routeHandlers/login/login");
const getAllProducts = require("./routeHandlers/products/getAllProducts");
const getProductByName = require("./routeHandlers/products/getProductByName");
const getProductsBySalecount = require("./routeHandlers/products/getProductsBySalecount");
const signup = require("./routeHandlers/signup/signup");
router.get("/allProducts", getAllProducts);
router.get("/products", getProductsBySalecount);
router.get("/allCategories", getAllCategories);
router.get("/getCart", verifyJWT, getCart);
router.get("/products/:productName", getProductByName);
router.post("/signup", encryptPassword, signup);
router.post("/login", login);

module.exports = router;
