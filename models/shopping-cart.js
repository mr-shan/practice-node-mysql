const db = require("./../service/db");

module.exports = class ShoppingCart {
  constructor(product_id, quantity) {
    this.product_id = product_id;
    this.quantity = quantity;
  }

  static addToCart = (id, callback) => {
    db.execute("SELECT * FROM shopping_cart where product_id = ?", [id])
      .then(([rows, dbInfo]) => {
        if (rows.length === 0) {
          db.execute("INSERT INTO shopping_cart VALUES (?, ?)", [id, 1])
            .then((data) => callback("success"))
            .catch((error) => callback("fail"));
        } else {
          db.execute(
            `
                UPDATE shopping_cart 
                SET count = ? 
                WHERE product_id = ?;
            `,
            [rows[0].count + 1, id]
          )
            .then((data) => callback("success"))
            .catch((error) => callback("fail"));
        }
      })
      .catch((error) => {
        console.error(error);
        callback("fail");
      });
  };

  static removeFromCart = (id) => {

    return db.execute("DELETE FROM shopping_cart where product_id = ?", [id]);
  };

  static fetchAll = () =>
    db.execute(`
        SELECT products.title, products.id, products.img, shopping_cart.count, products.price * shopping_cart.count as total_price 
        from products
        join shopping_cart
        on products.id = shopping_cart.product_id;
    `);
};