var express = require('express');
var router = express.Router();

const UserDAO = require('../model/Users')

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('Esta dentro de users ')
    UserDAO.list().then(users => {
      res.status(200).json(users)
    }).catch(err => {
      res.status(500).json({message: 'Error ao obter  usuarios'})
    })
});

// save: async (email, name, password, permission)
router.post("/", (req, res) => {
  const {email, name, password, permission} = req.body

  UserDAO.save(email, name, password, permission).then(user => {
    res.status(201).json(user)
  }).catch(err => {
    res.status(400).send('Erro ao salvar o User.')
  })

})

module.exports = router;
