var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
	console.dir(req.query);
	res.send("user");
});

module.exports = router;
