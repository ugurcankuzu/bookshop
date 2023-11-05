const router = require("express").Router();
const getAllProducts = require("./routeHandlers/products/getAllProducts");
const getProductsBySalecount = require("./routeHandlers/products/getProductsBySalecount");
router.get("/allProducts", getAllProducts);
router.get("/products", getProductsBySalecount);
module.exports = router;
