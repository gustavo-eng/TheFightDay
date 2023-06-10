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


// colocar para atualizar os dados no front por padrao
// buscando os dados no banco
router.put("/:id", (req, res) => {
  const {email, name, password, permission} = req.body
  const  id  = req.params.id

  UserDAO.update(id, email, name, password, permission).then(user => {
       res.status(201).json(user)

  }).catch(err => {
    res.status(400).send('Erro ao atualizar o User.')
  })
})

module.exports = router;
