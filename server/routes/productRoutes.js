const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productController');

router.post(`/`, productControllers.createProduct);
router.get(`/`, productControllers.readProduct);

module.exports = router;