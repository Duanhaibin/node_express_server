const express = require("express");

// 使用 body-parser库处理post 请求
var bodyParser = require("body-parser");
var router = express.Router();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// create application/json parser 发的json
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser 发的字符串 ，json类型字符串
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/", function(req, res) {
  console.dir(req.body);
  res.send("ok");
});

router.post("/int", urlencodedParser, function(req, res) {
  console.log(req.body);
  console.dir(req.body);
  res.send("ok");
});

router.post("/upload", jsonParser, function(req, res) {
  console.dir(req.body);
  res.send("ok");
});

router.post("/interface", urlencodedParser, function(req, res) {
  console.dir(req.body);
  res.send("ok");
});

module.exports = router;
