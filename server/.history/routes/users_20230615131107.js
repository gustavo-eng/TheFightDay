var express = require('express');
var router = express.Router();

const UserDAO = require('../model/Users');

const controllAcces = require('../middleware/controlaAcesso');
//APLICACAO DE MIDDLEWARES

//
router.get('/profile', async (req, res) => {
   UserDAO.getById(req.id).then(profile => {
    console.log('[[[')
    console.log(profile)
    res.status(200).json(profile)

   }).catch(err => {
    res.status(404).json({msg: "User not Found "})
   })
})

/* GET users listing. */
router.get('/', controllAcces.accessControl, controllAcces.permissioAdminControll ,function(req, res, next) {
    // res.send('Esta dentro de users ')
    UserDAO.list().then(users => {
      res.status(200).json(users)
    }).catch(err => {
      res.status(500).json({message: 'Error ao obter usuarios'})
    })
});

// save: async (email, name, password, permission)
//MIDDLEWARE
router.post("/", (req, res) => { // aplicar regra de negocio aqui para analisar quantidade de users com permission admin

  const idPayment = req.query.payment
  const {email, name, password, permission} = req.body

  UserDAO.save(email, name, password, permission).then(user => {
    res.status(201).json(user)
  }).catch(err => {

    res.status(400).send('Erro ao salvar o User.')

  })


})
// colocar para atualizar os dados no front por padrao
// buscando os dados no banco
//MIDDLEWARE de CONTROLE DE ACESSO AQUI TBM

router.put("/:id", controllAcces.accessControl ,(req, res) => {
  const {email, name, password, permission} = req.body
  const { id } = req.params
  if(req.id == req.params.id || req.userPermission.includes('sensei')) {
    UserDAO.update(id, email, name, password, permission).then(user => {
      console.log('Usuario a ser alterado')
      console.log(user)
         res.status(201).json(user)
    }).catch(err => {
      res.status(400).send('Erro ao atualizar o User.')
    })
  } else {
    res.status(400).json({msg: "'Erro ao atualizar o User. Usuario nao permitido'"})
  }
})

//MIDDLEWARE
router.delete("/:id", controllAcces.accessControl ,(req, res) => {
  const { id } = req.params
  if(req.id == req.params.id || req.userPermission.includes('sensei')) {
    UserDAO.delete(id)
    .then(user => {
      res.status(200).json(user)
    }).catch(err => {
      console.log(err)
      res.status(400).json({msg: "Erro ao deletar o User"})

    })
  } else {
    res.status(400).json({msg: "Erro ao deletar o User. Usuario nao permitido"})
  }

})
//MIDDLEWARE
//MIDDLE DE PROFESSOR
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
