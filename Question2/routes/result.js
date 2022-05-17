var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
  let name = req.body.name;
  let age = req.body.age;
  
  req.session.name = name;
    req.session.age = age;
    res.render("output",{name:req.session.name ,age:req.session.age});
 
});

module.exports = router;
