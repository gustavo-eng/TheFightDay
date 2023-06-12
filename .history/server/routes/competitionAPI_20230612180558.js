const express = require('express')
const router = express.Router()
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


router.post("/", upload.single('picture') ,(req, res) => {
    // const {name, dataPayment, dataCompetition, price, voucher} = req.body
    const {name, dataPayment, dataCompetition, price} = req.body

    const picture = req.file

    competitionDAO.save(name, dataPayment, dataCompetition, price, picture)
    .then(competition => {
        res.status(201).json(competition)

    }).catch(err => {
        res.status(400).json({msg: `Erro ao salvar . Erro : ${err}`})
    })

})


module.exports = router;


