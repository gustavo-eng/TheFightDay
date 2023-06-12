const express = require('express')
const router = express.Router()
const fs = require('fs')

const competitionDAO = require('../model/Competition')

// const img = require('../public/images')

// Exemplo de leitura de arquivo
const imagemBuffer = fs.readFileSync('../public/images/')

router.get('/', (req, res) => {
    competitionDAO.list((competitions) => {
        res.status(200).json(competitions)

    }).catch(err  => {
        res.status(400).json({msg: " Erro ao listar as competicoes "})
    })
})


router.post("/", (req, res) => {
    // const {name, dataPayment, dataCompetition, price, voucher} = req.body
    const {name, dataPayment, dataCompetition, price} = req.body

    competitionDAO.save(name, dataPayment, dataCompetition, price, imagemBuffer)
    .then(competition => {
        res.status(201).json(competition)

    }).catch(err => {
        res.status(400).send(err)
    })

})


module.exports = router;


// const competitionSchema = new mongoose.Schema({
//     nome:  String,
//     DataPagamento: { type: Date },
//     DataCompeticao: {type: Date},
//     valor: Number,
//     Comprovante: {type: Buffer},
//     // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},

// save: async (nome, DataPagamento, DataCompeticao, valor, Comprovante) => {
//     const competition = new CompetitionModel({
//         n
//     })
// }



// })

// router.get('/', function(req, res, next) {
//     // res.send('Esta dentro de users ')
//     UserDAO.list().then(users => {
//       res.status(200).json(users)
//     }).catch(err => {
//       res.status(500).json({message: 'Error ao obter  usuarios'})
//     })
// });