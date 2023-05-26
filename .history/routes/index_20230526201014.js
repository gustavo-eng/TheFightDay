var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs/promises');


// import '../public/documents/detalhes.txt'

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });

});

router.get('/descriptione', async (req, res) => {
  const data = await fs.readFile(path.join(__dirname, '../public/documents/detalhes.txt'), { encoding: 'utf8' });
  if(!data) {
    res.status(404).send('arquivo nao encontrado')
  } else {
    res.render('descricao', {data: data})
  }
})


module.exports = router;
