const express = require('express');
const path = require('path');
const rootPath = require('../utils/path');

const router = express.Router();

const savedData = [];

router.get('/product-form', (req, res, next) => {
    res.render('add-product', {docTitle: 'Add Products'});
})

router.post('/add-product', (req, res, next) => {
    savedData.push(req.body);
    res.send(req.body);
})

module.exports = {router, savedData};