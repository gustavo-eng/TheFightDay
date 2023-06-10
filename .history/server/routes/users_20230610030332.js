var express = require('express');
var router = express.Router();

const UserDAO = require('../model/Users')

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('Esta dentro de users ')
    UserDAO.list().then(users => {
      res.status(200).json(users)
    }).catch(err => {
      res.status(500).json({message: 'Error al obtener los usuarios'})
    })
});


module.exports = router;
