var express = require('express');
var router = express.Router();
var path = require('path');
var filter = require('../utils/filterFile')

const nodemailer = require('nodemailer')
const fs = require('fs/promises');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get("/logout", (req, res) => {
  res.redirect("/")
})


router.get('/description', async (req, res) => { // MELHORAR
  const data = await fs.readFile(path.join(__dirname, '../public/documents/detalhes.txt'), { encoding: 'utf8' });
  if(!data) {
    res.status(404).send('arquivo nao encontrado')
  } else {
    res.render('descricao', {data: data})
  }
})


router.get('/tecnologia', async (req, res) => {

  try {
    const data = await fs.readFile(path.join(__dirname, '../public/documents/bibliotecas.txt'), { encoding: 'utf8' });
    const technologies = filter.extractTechnologies(data);

    res.render('tecnologia', {technologies: technologies})

  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao ler o arquivo.');
  }

})

router.get('/desenvolvedor', (req, res) => {
    res.render('desenvolvedor')
})

// Envio de email

// passar transport como middleware

router.get("/contato", async (req, res) => {
  const { name, email, subject, message } = req.body

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "111b540bc636b4",
      pass: "5679eb2ef987ed"
    }
  });

  transport.verify((error, succes) => {
    if(error) {
      console.log()
      console.log(error)
    }
  })



  res.render('contato')
})



module.exports = router;

