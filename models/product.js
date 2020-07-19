const db = require("./../service/db");

module.exports = class Product {
  constructor(id, title, img, desc, price, category) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.desc = desc;
    this.price = price;
    this.category = category;
  }

  save = () =>
    db.execute(
      "INSERT INTO products (`title`, `desc`, `img`, `price`) VALUES (?, ?, ?, ?)",
      [this.title, this.desc, this.img, this.price]
    );

  static deleteById = (id) =>
    db.execute("SELECT * FROM products where id = ?", [id]);

  static fetchAll = () => db.execute("SELECT * FROM products");

  static findById = (id) =>
    db.execute("SELECT * FROM products WHERE id = ?", [id]);
};
