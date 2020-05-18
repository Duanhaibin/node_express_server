module.exports = function(app) {
  var indexRouter = require("../routes/index");
  var userRouter = require("../routes/user");
  var postRouter = require("../routes/post");
  var newsRouter = require("../routes/news");

  // 路由中间件
  app.use("/", indexRouter);

  app.use("/user", userRouter);
  app.use("/post", postRouter);
  app.use("/news", newsRouter);
};
