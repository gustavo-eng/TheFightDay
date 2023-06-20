var express = require('express');
var router = express.Router();

router.get('/report', (req, res) => {
    res.send('Rota /report')
})

module.exports = router