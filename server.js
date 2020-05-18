var express = require("express");
//运行express需要安装 npm install  -g  nodemon ,
// 默认找server.js   或者后面加js名 nodemon  aa.js

var indexController = require("./controllers/indexController");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //访问控制允许来源：所有
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //访问控制允许报头 X-Requested-With: xhr请求
  res.header("Access-Control-Allow-Metheds", "PUT, POST, GET, DELETE, OPTIONS"); //访问控制允许方法
  res.header("X-Powered-By", "nodejs"); //自定义头信息，表示服务端用nodejs
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

indexController(app);

app.listen(3000);
console.log("listening port to 3000");
