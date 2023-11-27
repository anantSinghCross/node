const express = require('express');
const {getAddProduct, addProduct} = require('../controllers/product');
const router = express.Router();

router.get('/product-form', getAddProduct);
router.post('/add-product', addProduct);

module.exports = {router};