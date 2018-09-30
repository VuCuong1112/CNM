var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SACHCU.STORE' });
});
router.get('/detail/*.:bookid', function(req, res, next) {
  res.render('book_detail', { title: 'Detail',id:req.params.bookid });
});
router.get('/addbook', function(req, res, next) {
  res.render("addbook", { title: 'Add New Book'});
});
router.post('/formadd',urlencodedParser, function(req, res, next) {
  // res.send(`hình ${req.body.hinhanh}
	// tua ${req.body.tuasach}
  //   `);
    console.log("hinh"+req.body.hinhanh);
    res.redirect("/addbook");
});
module.exports = router;
