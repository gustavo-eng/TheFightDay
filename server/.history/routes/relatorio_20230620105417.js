var express = require('express');
var router = express.Router();
const Chart = require('chart.js')
const puppeteer = require('puppeteer')

router.get('/', async (req, res) => {
    const chart = new Chart(/* Configurações do gráfico */);

  // Renderize o gráfico como uma imagem
  const imageBuffer = await chart.toBase64Image();

  // Gere o PDF contendo o gráfico
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(`
    <html>
      <body>
        <img src="data:image/png;base64, ${imageBuffer}" alt="Gráfico">
      </body>
    </html>
  `);
  const pdfBuffer = await page.pdf();
  await browser.close();

  // Envie o PDF como resposta
  res.contentType('application/pdf');
  res.send(pdfBuffer);
})

module.exports = router