const express = require('express');
const path = require('path');
const rootPath = require('../utils/path');

const router = express.Router();

router.get('/product-form', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'add-product.html'));
})

router.post('/add-product', (req, res, next) => {
    res.send(req.body);
})

module.exports = router;