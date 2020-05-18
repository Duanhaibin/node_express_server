const express = require("express");
var path = require("path"); //系统路径模块
var fs = require("fs"); //文件模块
const router = express.Router();
router.get("/list", function(req, res) {
  var file = path.join(__dirname, ".." + "/data/list.json");
  fs.readFile(file, "utf-8", function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
