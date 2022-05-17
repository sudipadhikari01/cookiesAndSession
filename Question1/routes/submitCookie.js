var express = require("express");
const { render } = require("../app");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  const { key } = req.body;
  const { value } = req.body;

  if (req.cookies.listCookies) {
      let listCookies = req.cookies.listCookies;
      listCookies.push({key:key,value:value});
      res.cookie("listCookies",listCookies);
    
  } else {
    res.cookie("listCookies",[{key:key,value:value}]);
  }

  res.render("listCookie",{listCookies:req.cookies.listCookies});
});

module.exports = router;
