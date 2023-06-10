var express = require('express');
var router = express.Router();

const UserDAO = require('../model/Users')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Esta dentro de users ')
});


module.exports = router;
