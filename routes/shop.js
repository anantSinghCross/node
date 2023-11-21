const express = require('express')
const router = express.Router();

router.get('/home', (req, res, next) => {
    res.send('<h2>Shop Home</h2>')
})

module.exports = router;