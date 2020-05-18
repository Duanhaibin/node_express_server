var express = require("express");
var path = require("path"); //系统路径模块
var fs = require("fs"); //文件模块

var router = express.Router();

router.get("/", function(req, res) {
  console.dir(req.query);
  res.send("index");
});

router.get("/banner", function(req, res) {
  var file = path.join(__dirname, ".." + "/data/banner.json");
  fs.readFile(file, "utf-8", function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/api", function(req, res) {
  //console.log(req.body); //获取请求参数

  var file = path.join(__dirname, ".." + "/data/test.json"); //文件路径，__dirname为当前运行js文件的目录
  //var file = 'f:\\nodejs\\data\\test.json'; //也可以用这种方式指定路径

  //读取json文件
  fs.readFile(file, "utf-8", function(err, data) {
    console.log(data);
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
