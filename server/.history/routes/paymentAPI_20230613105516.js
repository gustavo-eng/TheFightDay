const express = require('express')
const router = express.Router()
//server\1686605359773.png
//const img = require('voucher.jpg')

const paymentDAO = require('../model/Payment')

const controllAcces = require('../middleware/controlaAcesso');


// Lista todos os pagamentos
router.get('/',  controllAcces.accessControl, controllAcces.permissioAdminControll ,(req, res) => {
    paymentDAO.list()
    .then(payment => {
        res.status(200).json(payment)
    })
    .catch(err => {
        res.status(500).json({message: `Erro ao carregar pagamentos. Erro --> ${err.message}`})
    })
})


// essa consulta tem que ser pelo ID do usuario
// o id do usuario vai estar na tabela de pagamentos
router.get('/:id', controllAcces.accessControl ,(req, res) => {
    const { id } = req.params
    // paymentDAO.getById(id).then(payment => {
    //     res.status(200).json(payment)
    // }).catch(err => {
    //     res.status(404).json({msg: "Pagamentos nao encontrados "})
    // })


})




router.post('/', controllAcces.accessControl,(req, res) => {
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

