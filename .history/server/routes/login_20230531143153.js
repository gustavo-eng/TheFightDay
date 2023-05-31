const express = require('express')


const router = express.Router()

// jwt
const jwt = require('jsonwebtoken')



router.get('/', (req, res) => {
    res.send(`<h2> Dentro da rota /login </h2>`) // renderizar tela do front
})

router.post('/', (req, res) => {
    const {user, password} = req.body
    if(user === "gu" && password === '123') {
        const token = jwt.sign({user: user} , 'A1B2C3', {expiresIn: "1hr"})
        res.json({status: true, token: token, user: user})
    } else  {
        res.status(403).json({status: false, msg: 'Unauthorized user'})
    }
})










module.exports = router;

