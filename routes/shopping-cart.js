const express = require('express');
const shopingCartController = require('./../controllers/shopping-cart');

const router = express.Router();

router.get('/shopping-cart', shopingCartController.getCartItems);
router.post('/shopping-cart/add/:id', shopingCartController.addToCart);
router.post('/shopping-cart/remove/:id', shopingCartController.removeFromCart);

module.exports = router;