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






module.exports = router;


// router.get('/', function(req, res, next) {
//     // res.send('Esta dentro de users ')
//     UserDAO.list().then(users => {
//       res.status(200).json(users)
//     }).catch(err => {
//       res.status(500).json({message: 'Error ao obter  usuarios'})
//     })
// });