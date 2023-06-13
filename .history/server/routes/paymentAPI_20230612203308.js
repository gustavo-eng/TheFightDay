const express = require('express')
const router = express.Router()


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

    const  { file } = req.file



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