const express = require('express')

import ValidateLogin from '../validator/ValidateLogin'
const router = express.Router()

// jwt
const jwt = require('jsonwebtoken')


const UserDAO = require('../model/Users')
// aplicar middleware para verificar token

router.get('/', (req, res) => {
//
    // res.send(`<h2> Dentro da rota /login </h2>`) // renderizar tela do front
    res.redirect('http://localhost:3000/')
})


router.post('/', ValidateLogin.validateFields ,async (req, res) => {
    const {user, password} = req.body
    console.log('TESTEEEEE')
    const usuario =  await UserDAO.getByNameAndPassord(user, password)
    console.log(usuario)

    if (usuario != null){
        const token = jwt.sign({user: user, userPermission: usuario.permissoes, userId: usuario._id} , 'A1B2C3', {expiresIn: "2hr"})
        res.json({status: true, token: token, user: user,userPermission: usuario.permissoes, userId: usuario._id })
        console.log('redirect-----')

    } else {
        res.status(403).json({status: false, msg: 'Unauthorized user'})
    }

})


module.exports = router;






