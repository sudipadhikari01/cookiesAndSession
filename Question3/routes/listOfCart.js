var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session.cart);
  res.render('listCart',{"cart":req.session.cart});
});

module.exports = router;
