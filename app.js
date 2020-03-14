const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const shopRoutes = require("./routes/shop");
const adminRoutes = require('./routes/admin');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
  res.render("404", { pageTitle: "404 Page Not Found" });
});

app.listen(3000, () => console.log("Express app listening on 3000"));
