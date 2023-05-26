var express = require('express');
var router = express.Router();

const fs = require('fs')

// import '../public/documents/detalhes.txt'

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });

});

const arquivo = async () => {
  return fs.readFileSync('./detalhes.txt', 'utf-8',(err, data) => {
    if(err) {
      console.log('erro -> ')
      console.log(err)
      // res.status(500).send('Erro ao ler o arquivo')
    } else {
      console.log('ARQUIVO CARREGADO !!')
      console.log(data)
    }
  })
}


router.get('/description', async (req, res) => {
  await arquivo()
  res.render('descricao')
})



module.exports = router;
