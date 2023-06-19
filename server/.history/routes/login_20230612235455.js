const express = require('express')


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

// Login

//  Cadastrar buscar user no banco de dados API_KEY_pass
router.post('/', (req, res) => {
    const {user, password} = req.body
    const teste = UserDAO.getByNameAndPassord(user, password)
    console.log('TESTEEEEE')
    console.log(teste)
    UserDAO.getByNameAndPassord(user, password).then(() => {
        const token = jwt.sign({user: user} , 'A1B2C3', {expiresIn: "1hr"})
        res.json({status: true, token: token, user: user})

    }).catch(err => {
        res.status(403).json({status: false, msg: 'Unauthorized user'})
    })

    // if (UserDAO.getByNameAndPassord(user, password)){
    //     const token = jwt.sign({user: user} , 'A1B2C3', {expiresIn: "1hr"})
    //     res.json({status: true, token: token, user: user})
    //     console.log('redirect-----')

    // } else {
    //     res.status(403).json({status: false, msg: 'Unauthorized user'})
    // }

    // if(user === "gu" && password === '123') {
    //     const token = jwt.sign({user: user} , 'A1B2C3', {expiresIn: "1hr"})
    //     res.json({status: true, token: token, user: user})
    //     console.log('redirect-----')
    //     // res.redirect('http://localhost:3000/home')
    // } else  {
    //     res.status(403).json({status: false, msg: 'Unauthorized user'})
    // }

})


//res.json({status: true, token: token, user: user}) vai ficar em router.get para verificar se tem o user no banco

module.exports = router;





