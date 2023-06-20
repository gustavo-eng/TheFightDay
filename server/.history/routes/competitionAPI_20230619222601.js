const express = require('express')
const router = express.Router()
var path = require('path');
const fs = require('fs');

//MidleWare
const jwt = require('jsonwebtoken');
const competitionDAO = require('../model/Competition')
const controllAcces = require('../middleware/controlaAcesso');


//Aplicar sistema de busca no frontend para filtrar os dados corretos
//ABERTO
router.get('/', (req, res) => { // QUALQUER UM PODE ACESSAR
    competitionDAO.list().then(users => {
        res.status(200).json(users)
      }).catch(err => {
        res.status(500).json({message: 'Error ao obter  usuarios'})
      })
})


router.post("/", controllAcces.accessControl, controllAcces.permissioAdminControll ,(req, res) => {
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

router.delete("/:id", controllAcces.accessControl, controllAcces.permissioAdminControll ,(req, res) => {
    const { id } = req.params
    competitionDAO.delete(id).then((comp) => {
        res.status(200).json({msg: "Competicao deletada com suceso", comp})
    }).catch((err) => {
        res.status(500).json({msg: "Erro ao deletar competicao"})
    })
})

router.put("/:id", controllAcces.accessControl, controllAcces.permissioAdminControll ,async (req, res) => {
    const {name, dataPayment, dataCompetition, price} = req.body
    const {id} = req.params

    competitionDAO.update(id,name, dataPayment, dataCompetition, price)
    .then(competition => {
        res.status(200).json(competition)

    }).catch(err => {
        res.status(501).json({msg: "Nao foi possivel alterar o arquivo"})
    })
})

module.exports = router;


