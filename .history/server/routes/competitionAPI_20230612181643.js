const express = require('express')
const router = express.Router()
var path = require('path');

const fs = require('fs')

const competitionDAO = require('../model/Competition')

// const img = require('../public/images/')

// Exemplo de leitura de arquivo

// const imagemBuffer = fs.readFileSync('../public/images')



const upload = require('../config/multer')


router.get('/', (req, res) => {
    //res.status(200).send('/competition')
    competitionDAO.list((competitions) => {
        res.status(200).json(competitions)

    }).catch(err  => {
        res.status(400).json({msg: ` Erro ao listar as competicoes  ERRO : ${err}`})
    })
})


router.post("/", upload.single('file') ,(req, res) => {
    // const {name, dataPayment, dataCompetition, price, voucher} = req.body
    const {name, dataPayment, dataCompetition, price, voucher} = req.body

    const file = req.file

    competitionDAO.save(name, dataPayment, dataCompetition,price, voucher, file)
    .then(competition => {
        res.status(201).json(competition)

    }).catch(err => {
        res.status(400).json({msg: `Erro ao salvar . Erro : ${err}`})
    })

})


module.exports = router;


