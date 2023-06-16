const express = require('express')
const router = express.Router()
var path = require('path');
const fs = require('fs');

//MidleWare
const jwt = require('jsonwebtoken');
const competitionDAO = require('../model/Competition')
const controllAcces = require('../middleware/controlaAcesso');


//Aplicar sistema de busca no frontend para filtrar os dados corretos

router.get('/', (req, res) => { // QUALQUER UM PODE ACESSAR
    //res.status(200).json({msg : "Rota de competicao"})
    console.log(' DENTRO DE COMPETITION req.id')
    console.log(req.id)
    console.log('req.user --> ')
    console.log(req.usuario)
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

/*
router.put("/update/:id/:idPayment", controllAcces.accessControl ,async (req, res) => {
    const { email, name, nameCompetition, categoryWeight, categoryYear, picture } = req.body
    const idPayment = req.params.idPayment
    const {id} = req.params
    if(req.id == id || req.userPermission.includes('sensei')) {
        paymentDAO.getPaymentByUserId(req.id).then((payment) => {
            if(payment.length < 1) {
                res.status(404).json({msg: "Usuario nao possui pagamentos "})
            }else {
                paymentDAO.updatePaymentByUserId(idPayment, id,  email, name, nameCompetition, categoryWeight, categoryYear, picture)
                .then(result => {
                    res.status(200).json(result)
                }).catch(err => {res.status(500).json({msg: "Erro ao alterar user ** "})})
            }
        }).catch(err => {
            res.status(404).json({msg: "Usuario nao possui pagamentos "})
        })
    }
})


*/

