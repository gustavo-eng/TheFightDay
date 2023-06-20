var express = require('express');
var router = express.Router();
const Chart = require('chart.js')

router.get('/', async (req, res) => {
    res.send('Rota /report')
})

module.exports = router