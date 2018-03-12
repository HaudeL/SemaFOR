var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coucou' });
});

/* GET une association */
router.get('/association/:num_rna', function(req, res, next) {
  res.render('index', { title: 'Coucou' });
});
app.get 
module.exports = router;
