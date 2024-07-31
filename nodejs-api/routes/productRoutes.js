const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// Route zum Einfügen eines neuen Produkts
router.get('/addproduct/:product_name/:product_description/:product_price/:product_stock', productController.addProduct);

// Testroute, um Daten aus der Datenbank abzurufen
router.get('/products', productController.getProducts);

module.exports = router;
