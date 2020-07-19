const ShoppingCart = require("./../models/shopping-cart");

exports.getCartItems = (req, res, next) => {
  ShoppingCart.fetchAll()
    .then(([rows, dbFields]) => {
      res.render("shopping-cart", {
        pageTitle: "Shopping Cart",
        cartItems: rows,
      });
    })
    .catch((error) => console.log(error));
};

exports.addToCart = (req, res, next) => {
  const id = req.params.id;
  ShoppingCart.addToCart(id, (status) => {
    console.log(status);
    next();
  });
};

exports.removeFromCart = (req, res, next) => {
  const id = req.params.id;
  ShoppingCart.removeFromCart(id)
    .then((status) => {
      console.log(status);
      this.getCartItems(req, res, next);
    })
    .catch((error) => {
      console.error(error);
    });
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
