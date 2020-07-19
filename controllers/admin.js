const Product = require("./../models/product");

exports.getAddProductPage = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add New Product" });
};

exports.postAddProduct = (req, res, next) => {
  // products.push(req.body);
  const newProduct = new Product(
    null,
    req.body.title,
    req.body.img,
    req.body.desc,
    req.body.price,
    req.body.category
  );
  newProduct
    .save()
    .then((data) => {
      console.log(data);
      res.redirect("/");
    })
    .catch((error) => {
      console.error(error);
      res.redirect("/");
    });
};
