var express = require('express');
var router = express.Router();
var path = require('path');
var filter = require('../utils/filterFile')

const nodemailer = require('nodemailer')
const fs = require('fs/promises');
const { reset } = require('nodemon');



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
//MODULARIZAR essa ROTA
router.get("/contato", async (req, res) => {
  res.render('contato')

})

router.post('/enviar_email', (req, res) => {
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

    } else {
      console.log(' -------- Server is ready to take your emails ------------ ')
    }

  })

    // Configuração do email
  const mailOptions = {
      from: 'gustavodias.2000@alunos.utfpr.edu.br', // capturar do login do usuario
      to: email, // Substitua com o email do destinatário
      subject: subject,
      text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\nMensagem: ${message}`
  };

  transport.sendMail(mailOptions, (error, data) => {
    if(error) {
      console.log(error)
      // res.status(500).send('Ocorreu um erro ao enviar a mensagem')
    } else {
      console.log('Email enviado' + data.response)
      document.getElementById('success-message').innerHTML = 'Mensagem enviada com sucesso!';
      document.getElementById('error-message').innerHTML = '';
      // res.status(200).send('Mensagem enviada com sucesso')
    }
  })

})



module.exports = router;

