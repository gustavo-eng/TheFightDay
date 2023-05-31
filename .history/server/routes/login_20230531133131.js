const express = require('express')


const router = express.Router()

// jwt
const jwt = require('jsonwebtoken')



router.post('/', (req, res) => {
    const {user, password} = req.body
    if(req.body.user === "gu" && req.body.password === '123') {
        const token = jwt.sign({user: user} , 'A1B2C3', {expiresIn: "1hr"})
        res.json({status: true, token: token, user: user})
    } else  {
        res.status(403).json({status: false, msg: 'Unauthorized user'})
    }
})


module.exports = router;

