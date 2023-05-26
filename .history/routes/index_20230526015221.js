var express = require('express');
var router = express.Router();

const fs = require('fs/promises');


// import '../public/documents/detalhes.txt'

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });

});




async function example() {
  try {
    const data = await fs.readFile('C:/Users/diasg/Desktop/projeto_final_webV3/routes/detalhes.txt', { encoding: 'utf8' });
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
