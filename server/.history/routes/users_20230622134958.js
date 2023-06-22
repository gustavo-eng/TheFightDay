var express = require('express');
var router = express.Router();

const validator = require('../validator/taskValidatorNewUser')

const UserDAO = require('../model/Users');

const controllAcces = require('../middleware/controlaAcesso');
//APLICACAO DE MIDDLEWARES




router.get('/profile', controllAcces.accessControl, async (req, res) => {
   UserDAO.getById(req.id).then(profile => {
    res.status(200).json(profile)
   }).catch(err => {
    res.status(404).json({msg: "User not Found "})
   })
})

router.get('/', controllAcces.accessControl, controllAcces.permissioAdminControll ,function(req, res, next) {
    UserDAO.list().then(users => {
      res.status(200).json(users)
    }).catch(err => {
      res.status(500).json({message: 'Error ao obter usuarios'})
    })
});


router.post("/",validator.validateFieldsUser ,(req, res) => { // aplicar regra de negocio aqui para analisar quantidade de users com permission admin
  const idPayment = req.query.payment
  const {email, user, password, permission} = req.body
  UserDAO.save(email, user
    , password, permission).then(user => {
    res.status(201).json(user)
  }).catch(err => {
    res.status(400).send('Erro ao salvar o User.')
  })
})

// / save: async (email, name, password, permission, idPayment) => {
router.post("/loadUsers", async (req, res) => {
  console.log('entrou')
  try {
    const users = [
        {email: "user1@hotmail.com", user: "usuario1", password: "usuario1", permission: ["sensei"] },
      {email: "user1@hotmail.com", user: "usuario2", password: "usuario2", permission: ["aluno"] },
      {email: "user1@hotmail.com", user: "usuario3", password: "usuario3", permission: ["sensei"] },
      {email: "user1@hotmail.com", user: "usuario4", password: "usuario4", permission: ["aluno"] },
      {email: "user1@hotmail.com", user: "usuario5", password: "usuario5", permission: ["sensei"] },
    ]
    const promises = users.map(user => UserDAO.save(user.email, user.user, user.password, user.permission));
    await Promise.all(promises)
    res.status(201).json({status: true ,message: "Usuários carregados com sucesso.", users: users });

  } catch (error) {
    res.status(400).json({status: true, msg: `Erro ao realizar carga automatica dos usuario. Erro -> ${error}`});
  }
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
