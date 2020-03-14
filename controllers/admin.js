const products = require("./../models/product");

exports.getAddProductPage = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add New Product" });
};

exports.postAddProduct = (req, res, next) => {
  products.push(req.body);
  res.redirect("/");
};
