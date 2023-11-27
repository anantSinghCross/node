const Product = require('../models/product');

const getAddProduct = (req, res, next) => {
    res.render('add-product', {docTitle: 'Add Products'});
}

const addProduct = (req, res, next) => {
    const newProduct = new Product(req.body.title);
    newProduct.save();
    res.redirect('/home');
}

const getHome =  (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {docTitle: 'Products', products: products});
    });
}

module.exports = {
    getAddProduct,
    addProduct,
    getHome
}