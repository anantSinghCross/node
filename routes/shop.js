const express = require('express');
const path = require('path');
const rootPath = require('../utils/path');
const router = express.Router();
const {savedData} = require('./admin')

router.get('/home', (req, res, next) => {
    console.log(savedData)
    res.sendFile(path.join(rootPath, 'views', 'shop.html'));
})

module.exports = router;