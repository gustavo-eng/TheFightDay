const express = require('express')
const router = express.Router()

const competitionDAO = require('../model/Competition')

router.get('/', (req, res) => {
    competitionDAO.list((competitions) => {
        res.status(200).json(competitions)

    }).catch(err  => {
        res.status(400).json({msg: " Erro ao listar as competicoes "})
    })
})


router.post("/", (req, res) => {

})


module.exports = router;


// const competitionSchema = new mongoose.Schema({
//     nome:  String,
//     DataPagamento: { type: Date },
//     DataCompeticao: {type: Date},
//     valor: Number,
//     Comprovante: {type: Buffer},
//     // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},

// })

// router.get('/', function(req, res, next) {
//     // res.send('Esta dentro de users ')
//     UserDAO.list().then(users => {
//       res.status(200).json(users)
//     }).catch(err => {
//       res.status(500).json({message: 'Error ao obter  usuarios'})
//     })
// });