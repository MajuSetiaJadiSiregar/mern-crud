const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productController');

router.post(`/`, productControllers.createProduct);
router.get(`/`, productControllers.readProduct);
router.put(`/:id`, productControllers.updateProduct);
router.delete(`/:id`, productControllers.deleteProduct);

module.exports = router;