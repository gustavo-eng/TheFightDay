var express = require('express');
var router = express.Router();

const fs = require('fs/promises');


// import '../public/documents/detalhes.txt'

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });

});




async function example() {
  try { // alterar este caminhho
    const data = await fs.readFile(path.join(__dirname, 'detalhes.txt'), { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}


router.get('/description', async (req, res) => {
  example()
  res.render('descricao')
})



module.exports = router;
