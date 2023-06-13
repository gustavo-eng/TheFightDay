const express = require('express')
const router = express.Router()
var path = require('path');

const fs = require('fs');

//MidleWare
const jwt = require('jsonwebtoken');

const competitionDAO = require('../model/Competition')

const controllAcces = require('../middleware/controlaAcesso');


router.get('/', controllAcces.accessControl ,(req, res) => {
    //res.status(200).json({msg : "Rota de competicao"})
    console.log(' DENTRO DE COMPETITION req.id')
    console.log(req.id)
    console.log('req.user --> ')
    console.log(req.user)
    competitionDAO.list().then(users => {
        res.status(200).json(users)
      }).catch(err => {
        res.status(500).json({message: 'Error ao obter  usuarios'})
      })
})


router.post("/",(req, res) => {
    // const {name, dataPayment, dataCompetition, price, voucher} = req.body
    const {name, dataPayment, dataCompetition, price} = req.body

    competitionDAO.save(name, dataPayment, dataCompetition,price)
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


