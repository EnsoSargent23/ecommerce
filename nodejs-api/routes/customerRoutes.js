const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

// Route zum Einfügen eines neuen Kunden
router.post('/addcustomer', customerController.addCustomer);

// Route zur Überprüfung der Anmeldung
router.post('/login', customerController.login);

module.exports = router;
