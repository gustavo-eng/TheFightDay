const express = require('express')
const router = express.Router()
const UserDAO = require('../model/Users');
const paymentDAO = require('../model/Payment')
const competitionDAO = require('../model/Competition')
const controllAcces = require('../middleware/controlaAcesso');


// Lista todos os pagamentos
router.get('/',  controllAcces.accessControl,  (req, res) => {
    //lista os pagamentos com do id do usuario
    // ou lista todos os pagamentos se for um adm
    // alterar para listar apenas seu usuario !
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
    //
    const id = req.params.id

    paymentDAO.getPaymentByUserId(id).then((payment) => {
        console.log(`Pagamentos do usuario de id ${id} --> `)
        console.log(payment)
        res.status(200).json(payment)
    }).catch(err => {
        res.status(404).json({msg: "Pagamentos nao encontrados "})
    })

})



// ID da competicao
// ID do usuario


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


//FALTA O DELETE !!
//https://www.base64decode.org/

module.exports = router

