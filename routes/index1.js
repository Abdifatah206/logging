var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index1', function(req, res, next) {
  res.render('index1', { title: 'Express' });
});

module.exports = router;