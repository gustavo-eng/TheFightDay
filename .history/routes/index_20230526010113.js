var express = require('express');
var router = express.Router();

const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/description', (req, res) => {
  res.render('descricao')
})



module.exports = router;
