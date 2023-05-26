var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs/promises');


// import '../public/documents/detalhes.txt'

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });

});




async function example() {
  try { // alterar este caminhho
    const data = await fs.readFile(path.join(__dirname, '../public/documents/detalhes.txt'), { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}


router.get('/description', async (req, res) => {
  const data = example().then(data => data)
  console.log('----------------------------------------')
  console.log(data)
  res.render('descricao', {data: await fs.readFile(path.join(__dirname, '../public/documents/detalhes.txt'), { encoding: 'utf8' });})
})



module.exports = router;
