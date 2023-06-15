const express = require('express')
const router = express.Router()
const UserDAO = require('../model/Users');
const paymentDAO = require('../model/Payment')
const competitionDAO = require('../model/Competition')
const controllAcces = require('../middleware/controlaAcesso');

// Lista todos os pagamentos
router.get('/',  controllAcces.accessControl, controllAcces.permissioAdminControll,  (req, res) => {
    paymentDAO.list()
    .then(payment => {
        res.status(200).json(payment)
    })
    .catch(err => {
        res.status(500).json({message: `Erro ao carregar pagamentos. Erro --> ${err.message}`})
    })
})

// essa consulta tem que ser pelo ID do usuario
// o id do usuario vai estar na tabela de pagamentos
// NAO pode ser pelo id do pagamento
// se for usar, lista todos. Caso ao constrario lista apenas
router.get('/:id', controllAcces.accessControl,  controllAcces.permissioAdminControll , async (req, res) => {
    const id = req.params.id
    paymentDAO.getPaymentByUserId(id).then((payment) => {
        // console.log(`Pagamentos do usuario de id ${id} --> `)
        // console.log(payment)
        if(payment.length < 1) {
            res.status(404).json({msg: "Usuario nao possui pagamentos "})
        }else {
            res.status(200).json(payment)
        }
    }).catch(err => {
        res.status(404).json({msg: "Usuario nao possui pagamentos "})
    })

})

// MELHORAR - pagamento exclusivo para o usuario
router.post('/', controllAcces.accessControl, async (req, res) => {
    const { email, name, nameCompetition, categoryWeight, categoryYear, picture } = req.body
    const idCompetition = req.query.competition
    competitionDAO.getById(idCompetition).then(() => {
         paymentDAO.save(email, name, nameCompetition, categoryWeight, categoryYear, picture, idCompetition, req.id)
            .then(payment => {
                UserDAO.addPaymentToUser(req.id, payment._id)
                res.status(200).json(payment)
            }).catch(err => {
                res.status(500).json({msg: `Erro ao salvar pagamento. Error -> ${err}`, email: email})
            })
    }).catch(err => {
        res.status(404).json({msg: "Competition not found"})
    })
})


//MELHORAR
router.delete("/:id",controllAcces.accessControl, controllAcces.permissioAdminControll, async (req, res) => {
    const {id} = req.params
    const payment = await paymentDAO.getById(id)

    paymentDAO.delete(id).then(() => {
        res.status(200).json({msg: "Esse pagamento sera deletado",payment})
    }).catch(err => {
        res.status(200).json({msg: "Erro ao deletar pagamento"})
    })
})

///busca/:id/:idPayment
router.put("/update/:id/:idPayment", controllAcces.accessControl ,async (req, res) => {
    const { email, name, nameCompetition, categoryWeight, categoryYear, picture } = req.body
    const idPayment = req.params.idPayment
    const {id} = req.params
    if(req.id == id || req.userPermission.includes('sensei')) {
        paymentDAO.getPaymentByUserId(req.id).then((payment) => {
            if(payment.length < 1) {
                res.status(404).json({msg: "Usuario nao possui pagamentos "})
            }else {
                paymentDAO.updatePaymentByUserId(idPayment, req.id,  email, name, nameCompetition, categoryWeight, categoryYear, picture)
                .then(result => {

                }).catch(err => {res.status(500).json({msg: "Erro ao alterar user ** "})})
            }
        }).catch(err => {
            res.status(404).json({msg: "Usuario nao possui pagamentos "})
        })
    }
})


// talvez essa nem precise ser USADA
router.get("/busca/:id", controllAcces.accessControl ,async (req, res) => {
    const { id } =  req.params
    if(req.id == req.params.id || req.userPermission.includes('sensei')) {
        UserDAO.getById(id).then(user => {
            console.log('Dentro de /busca/:id ')
            console.log(user)
            res.status(200).json(user.payments)

        }).catch(err => {
            res.status(200).json({msg: "Erro ao obter usuario "})
            console.log(err)
        })

    }

})

// deletar todos pagamentos do sistema
// router.delete('/todos', async () => {

// })


// const {id} = req.params
// paymentDAO.delete(id).then(() => {
//     const payment =  paymentDAO.getById(id).then(() => {
//         res.status(200).json({payment , msg: "Payment deleted successfully"})
//     }).catch(() => {
//         res.status(404).json({msg: "Payment not found "})
//     })
// }).catch(() => {3
//     res.status(503).json({msg: "Erro ao deletar"})
// })


//FALTA O DELETE !!
//https://www.base64decode.org/

module.exports = router

