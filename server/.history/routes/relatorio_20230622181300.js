const express = require('express');
const router = express.Router();
const { createCanvas } = require('canvas');
const Chart = require('chart.js/auto');
const puppeteer = require('puppeteer');

const competitionDAO = require('../model/Competition')
const UserDAO = require('../model/Users');
const paymentDAO = require('../model/Payment')


router.get('/',async (req, res) => {
  // Crie um canvas para renderizar o gráfico
  const canvas = createCanvas(800, 600); // Substitua as dimensões conforme necessário
  const ctx = canvas.getContext('2d');

  console.log('Quantidade user')
  console.log((await UserDAO.list()).length)

  const qtdUser = await UserDAO.list()
  const qtdPayment = await paymentDAO.list()
  const qtdCompetitions = await competitionDAO.list()
  // Crie o gráfico usando as configurações desejadas

  console.log('QUANTIDADE DE PAGAMENTOS')
  console.log(qtdPayment.length)
  const chart = new Chart(ctx, {
    type: 'pie', // Tipo de gráfico (pode ser 'bar', 'line', 'pie', etc.)
    data: {
      labels: ['Usuários', 'Pagamentos', 'Competições'], // Rótulos do eixo x
      datasets: [
        {
          label: 'Dados do Gráfico',
          data: [qtdUser.length, qtdPayment.length, qtdCompetitions.length], // Valores correspondentes aos rótulos
          backgroundColor: 'rgba(55, 12, 182, 0.2)', // Cor de preenchimento das barras
          borderColor: 'rgba(75, 52, 122, 1)', // Cor da borda das barras
          borderWidth: 2, // Largura da borda das barras
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true, // Define o início do eixo y em zero
        },
      },
    },
  });

  // Renderize o gráfico como uma imagem
  const imageBuffer = canvas.toBuffer('image/png');

  // Gere o PDF contendo o gráfico
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(`
    <html>
      <body>
        <img src="data:image/png;base64, ${imageBuffer.toString('base64')}" alt="Gráfico">
      </body>
    </html>
  `);
  const pdfBuffer = await page.pdf();
  await browser.close();

  // Envie o PDF como resposta
  res.contentType('application/pdf');
  res.send(pdfBuffer);
});

module.exports = router;
