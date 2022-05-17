var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
    //   res.render('index', { title: 'Express' });
    let { name } = req.body;
    let { price } = req.body;

    let item = {
        name: name,
        price: price,
        quantity: 1,
    };

    if (req.session.cart) {
        let cart = req.session.cart;
        let product = cart.find((itm) => itm.name === item.name);
        if (product) {
            product.price =parseFloat(product.price) + parseFloat(item.price);
            product.quantity += item.quantity;
        } else {
            cart.push(item);
        }
    } else {
        req.session.cart = [{ name: name, price: price, quantity: 1 }];
    }

    // console.log(
    //     "name:" + name + " price:" + price + " session " + req.session.cart
    // );

    res.redirect("/listOfCart");
});

module.exports = router;
