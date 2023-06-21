var express = require('express');
var router = express.Router();

const UserDAO = require('../model/Users');

const controllAcces = require('../middleware/controlaAcesso');
//APLICACAO DE MIDDLEWARES

//
router.get('/profile', controllAcces.accessControl, async (req, res) => {
   UserDAO.getById(req.id).then(profile => {
    res.status(200).json(profile)
   }).catch(err => {
    res.status(404).json({msg: "User not Found "})
   })
})

/* GET users listing. */
router.get('/', controllAcces.accessControl, controllAcces.permissioAdminControll ,function(req, res, next) {

    UserDAO.list().then(users => {
      res.status(200).json(users)
    }).catch(err => {
      res.status(500).json({message: 'Error ao obter usuarios'})
    })
});


router.post("/", (req, res) => { // aplicar regra de negocio aqui para analisar quantidade de users com permission admin

  const idPayment = req.query.payment
  const {email, user, password, permission} = req.body

  UserDAO.save(email, user
    , password, permission).then(user => {
    res.status(201).json(user)
  }).catch(err => {
    res.status(400).send('Erro ao salvar o User.')
  })
})

router.put("/:id", controllAcces.accessControl ,(req, res) => {
  const {email, user, password, permission} = req.body
  const { id } = req.params
  if(req.id == req.params.id || req.userPermission.includes('sensei')) {
    UserDAO.update(id, email, user, password, permission).then(user => {
         res.status(201).json({status: true,user})
    }).catch(err => {
      res.status(400).json({msg: "Erro ao atualizar o User. "})
    })
  } else {
    res.status(400).json({msg: " Usuario nao permitido"})
  }
})

router.delete("/:id", controllAcces.accessControl ,(req, res) => {
  const { id } = req.params
  if(req.id == req.params.id || req.userPermission.includes('sensei')) {
    UserDAO.delete(id)
    .then(user => {
      res.status(200).json({status: true,user})
    }).catch(err => {
      res.status(400).json({msg: "Erro ao deletar o User"})
    })
  } else {
    res.status(400).json({msg: "Erro ao deletar o User. Usuario nao permitido"})
  }

})


router.get('/:id', controllAcces.accessControl ,(req, res) => {
  const { id } = req.params
  if(req.id == req.params.id || req.userPermission.includes('sensei')) {
    UserDAO.getById(id).then(user => {
      res.status(200).json(user)
    }).catch(err => {
      res.status(400).send('Erro ao encontrar o User.')
    })
  } else {
    res.status(400).json({msg: "Erro ao consultar  User. Usuario nao permitido"})
  }

})
module.exports = router;
