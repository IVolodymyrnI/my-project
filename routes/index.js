var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Expressss",
  });
  res.render("index", {
    img: "https://pixabay.com/get/g61e71f5cd4bf06e6267ec0d110283913a7428de38275e9ab9f8f878d4b4a94cb9558a697c0a1cdf01baf5bf9719f8f1161d04082e0a6787636ee61055f64cd71_1280.jpg",
  });
});

module.exports = router;
