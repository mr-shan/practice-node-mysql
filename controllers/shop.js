const products = require('./../models/product');
exports.getProducts = (req, res, next) => {
    res.render('shop', { pageTitle: "Products", products: products });
}