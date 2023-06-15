const express = require('express')
const router = express.Router()
//server\1686605359773.png
//const img = require('voucher.jpg')
const UserDAO = require('../model/Users');
const paymentDAO = require('../model/Payment')

const controllAcces = require('../middleware/controlaAcesso');


// Lista todos os pagamentos
router.get('/',  controllAcces.accessControl,  (req, res) => {
    //lista os pagamentos com do id do usuario
    // ou lista todos os pagamentos se for um adm
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
router.get('/:id', controllAcces.accessControl ,(req, res) => {
    const { id } = req.params
    // paymentDAO.getById(id).then(payment => {
    //     res.status(200).json(payment)
    // }).catch(err => {
    //     res.status(404).json({msg: "Pagamentos nao encontrados "})
    // })
})



// ID da competicao
// ID do usuario

router.post('/', controllAcces.accessControl, async (req, res) => {
    const { email, name, nameCompetition, categoryWeight, categoryYear, picture } = req.body
    console.log(`post ---  router.post('/', (req, res) - ${email}`)

    const idCompetition = req.query.competition
    // const  {picture}  = req.files

    // const {file}  = req.file
    // const picture = req.file

    console.log('ARQUIVOO ----> ')
    console.log(picture.buffer)

    paymentDAO.save(email, name, nameCompetition, categoryWeight, categoryYear, picture, idCompetition, req.id)
    .then(payment => {
        res.status(200).json(payment)
        console.log('user.payments --> ')
        UserDAO.getById(req.id).then(user =>  {
            console.log(user.senha)
        })
        console.log(UserDAO.getById(req.id).then(e => console.log(e)))
        //Atualizando usuario
        // let user =  UserDAO.getById(req.id).then(() => {
        //         console.log('User getById user.nome -> ')
        //         user.then(conteudo => {
        //             console.log(conteudo)
        //         })
        // })

    }).catch(err => {
        console.log('Campo Email /payment --> ')
        console.log(email)
        res.status(500).json({msg: `Erro ao salvar pagamento. Error -> ${err}`, email: email})
    })

})


//FALTA O DELETE !!
//https://www.base64decode.org/

module.exports = router

