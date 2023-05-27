var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs/promises');


// import '../public/documents/detalhes.txt'

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });

});



router.get('/description', async (req, res) => { // MELHORAR
  const data = await fs.readFile(path.join(__dirname, '../public/documents/detalhes.txt'), { encoding: 'utf8' });
  if(!data) {
    res.status(404).send('arquivo nao encontrado')
  } else {
    res.render('descricao', {data: data})
  }
})

function extractTechnologies(data) {
  const regex = /\d+\.\s+(.+):\s(.+)/g;
  const technologies = [];

  let match;
  while ((match = regex.exec(data)) !== null) {
    const technology = {
      name: match[1],
      description: match[2]
    };
    technologies.push(technology);
  }

  return technologies;
}
router.get('/tecnologia', async (req, res) => {

  try {
    const data = await fs.readFile(path.join(__dirname, '../public/documents/bibliotecas.txt'), { encoding: 'utf8' });
    const technologies = extractTechnologies(data);

    res.render('tecnologia', {technologies: technologies})

  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao ler o arquivo.');
  }

})

module.exports = router;

/*
const express = require('express');
const fs = require('fs');
const mustache = require('mustache');

const app = express();

app.get('/', async (req, res) => {
  try {
    const data = await fs.promises.readFile('caminho/para/o/arquivo.txt', 'utf8');
    const technologies = extractTechnologies(data);

    const renderedTemplate = mustache.render('template.mustache', { technologies });

    res.send(renderedTemplate);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao ler o arquivo.');
  }
});

function extractTechnologies(data) {
  const regex = /\d+\.\s+(.+):\s(.+)/g;
  const technologies = [];

  let match;
  while ((match = regex.exec(data)) !== null) {
    const technology = {
      name: match[1],
      description: match[2]
    };
    technologies.push(technology);
  }

  return technologies;
}

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


*/