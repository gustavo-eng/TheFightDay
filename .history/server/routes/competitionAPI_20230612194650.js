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
    //res.status(200).json({msg : "Rota de competicao"})
    competitionDAO.list().then(users => {
        res.status(200).json(users)
      }).catch(err => {
        res.status(500).json({message: 'Error ao obter  usuarios'})
      })
})


router.post("/",(req, res) => {
    // const {name, dataPayment, dataCompetition, price, voucher} = req.body
    const {name, dataPayment, dataCompetition, price, voucher} = req.body

    const file = req.file

    competitionDAO.save(name, dataPayment, dataCompetition,price, voucher, file.path)
    .then(competition => {
        res.status(201).json(competition)

    }).catch(err => {
        res.status(400).json({msg: `Erro ao salvar . Erro : ${err}`})
    })

})

router.get('/:id', (req, res) => {
    const { id } = req.params

    competitionDAO.getById(id).then(comp => {
        res.status(200).json(comp)
    })

})


module.exports = router;


