const express = require('express')
const router = express.Router()
//server\1686605359773.png
//const img = require('voucher.jpg')

const paymentDAO = require('../model/Payment')

const controllAcces = require('../middleware/controlaAcesso');


router.get('/', (req, res) => {
    paymentDAO.list()
    .then(payment => {
        res.status(200).json(payment)
    })
    .catch(err => {
        res.status(500).json({message: `Erro ao carregar pagamentos. Erro --> ${err.message}`})
    })
})

router.post('/', (req, res) => {
    const { email, name, nameCompetition, categoryWeight, categoryYear, picture } = req.body
    console.log(`post ---  router.post('/', (req, res) - ${email}`)
    //const file  = req.file
    // const picture = req.file
    console.log('ARQUIVOO ----> ')
    console.log(picture)

    paymentDAO.save(email, name, nameCompetition, categoryWeight, categoryYear, picture)
    .then(payment => {
        res.status(200).json(payment)

    }).catch(err => {
        console.log('Campo Email /payment --> ')
        console.log(email)
        res.status(500).json({msg: `Erro ao salvar pagamento. Error -> ${err}`, email: email})
    })

})
//https://www.base64decode.org/

module.exports = router

