const router = require("express").Router();
const products = require("../controllers/products");

// get all the products
router.get("/", products.getProducts);

// geting products from by category
router.get("/category/:category", products.getProductsByCategory);

//search route
router.get("/search/:search", products.searchProducts);

// getting single product using id
router.get("/product/:id", products.getSingleProduct);

//getting featured products
router.get("/featured", products.getFeaturedProducts);

// getting trending products
router.get("/trending", products.getTrendingProducts);
module.exports = router;

router.get("/products/recommended", products.getRecommendedProducts);
