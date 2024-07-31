const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

// Route zum Einfügen einer neuen Bestellung
router.get('/addorder/:customer_id/:order_date/:total/:status', orderController.addOrder);

// Route zum Einfügen eines neuen Bestellpostens
router.get('/addorderitem/:order_id/:product_id/:quantity/:price', orderController.addOrderItem);

module.exports = router;
