const router = require("express").Router();
const getAllCategories = require("./routeHandlers/categories/getAllCategories");
const getAllProducts = require("./routeHandlers/products/getAllProducts");
const getProductsBySalecount = require("./routeHandlers/products/getProductsBySalecount");
router.get("/allProducts", getAllProducts);
router.get("/products", getProductsBySalecount);
router.get("/getAllCategories", getAllCategories);
module.exports = router;
