const express = require('express')
const router = express.Router()
//server\1686605359773.png
//const img = require('voucher.jpg')

const paymentDAO = require('../model/Payment')

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
    const { email, name, nameCompetition, categoryWeight, categoryYear } = req.body
    console.log(`post ---  router.post('/', (req, res) - ${email}`)
    const file  = req.file

    console.log('ARQUIVOO ----> ')
    console.log(file)

    paymentDAO.save(email, name, nameCompetition, categoryWeight, categoryYear, img)
    .then(payment => {
        res.status(200).json(payment)

    }).catch(err => {
        console.log('Campo Email /payment --> ')
        console.log(email)
        res.status(500).json({msg: `Erro ao salvar pagamento. Error -> ${err}`, email: email})
    })

})


module.exports = router


/* API_KEY_pass
const paymentSchema = new mongoose.Schema({
    email: {type: String, default: ''},
    nome: {type: String, required: true},
    nomeCompeticao: {type: String, required: true},
    categoriaPeso: {type: String ,required: true},
    categoriaIdade: {type: String ,required: true},
    comprovante: {type: Buffer, require: false} //alterar
})
*/