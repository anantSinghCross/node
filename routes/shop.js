const express = require('express');
const router = express.Router();
const {getHome} = require('../controllers/product')

router.get('/home', getHome)

module.exports = router;