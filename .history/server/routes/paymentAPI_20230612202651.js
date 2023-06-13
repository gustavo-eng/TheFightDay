const express = require('express')
const router = express.Router()


const paymentDAO = require('../model/Payment')

router.get('/', (req, res) => {
    paymentDAO.list()
    .then(payment => {
        res.status(200).json(payment)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})


router.post('/', (req, res) => {

})


module.exports = router