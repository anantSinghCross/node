const express = require('express');
const router = express.Router();

router.get('/product-form', (req, res, next) => {
    res.send(`  <form action="/admin/add-product" method="POST">
                    <input type="text" name="product">
                    <button>Add Product</button>
                </form>`);
})

router.post('/add-product', (req, res, next) => {
    res.send(req.body);
})

module.exports = router;