var express = require('express');
var router = express.Router();

const fs = require('fs')

// import '../public/documents/detalhes.txt'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/description', (req, res) => {
  fs.readFileSync('detalhes.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log('erro -> ')
      console.log(err)
      res.status(500).send('Erro ao ler o arquivo')
    } else {
      console.log('ARQUIVO CARREGADO !!')
      res.render('descricao', {data: data})
    }
  })
  // res.render('descricao')
})



module.exports = router;
