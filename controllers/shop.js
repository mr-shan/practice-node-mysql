const Product = require("./../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, dbFields]) => {
      res.render("shop", { pageTitle: "Products", products: rows });
    })
    .catch((error) => console.log(error));
};

exports.getProductById = (req, res, next) => {
  Product.findById(req.params.id)
    .then(([rows, dbFields]) => {
      res.render("product-details", {
        pageTitle: "Product Details",
        product: rows[0],
      });
    })
    .catch((error) => console.log(error));
};
