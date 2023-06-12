const express = require('express')
const router = express.Router()

const competitionDAO = require('')

router.get('/', (req, res) => {
    res.status(200).send('Rota de competicao')
})





module.exports = router;