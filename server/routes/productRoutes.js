const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productController');

router.post(`/`, productControllers.createProduct);

module.exports = router;