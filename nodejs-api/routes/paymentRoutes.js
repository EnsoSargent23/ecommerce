const express = require('express');
const paymentController = require('../controllers/paymentController');
const router = express.Router();

// Route zum Einfügen einer neuen Zahlung
router.get('/addpayment/:order_id/:amount/:payment_date/:status', paymentController.addPayment);

module.exports = router;
