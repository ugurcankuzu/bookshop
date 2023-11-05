const router = require("express").Router();
const getAllProducts = require("./routeHandlers/products/getAllProducts");
router.get("/products", getAllProducts);

module.exports = router;
