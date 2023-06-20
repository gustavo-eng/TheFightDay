const express = require('express');
const router = express.Router();
const { createCanvas } = require('canvas');
const Chart = require('chart.js/auto');
const puppeteer = require('puppeteer');

router.get('/', async (req, res) => {
  // Crie um canvas para renderizar o gráfico
  const canvas = createCanvas(800, 600); // Substitua as dimensões conforme necessário
  const ctx = canvas.getContext('2d');

  // Crie o gráfico usando as configurações desejadas
  const chart = new Chart(ctx, {
    type: 'pie', // Tipo de gráfico (pode ser 'bar', 'line', 'pie', etc.)
    data: {
      labels: ['Label 1', 'Label 2', 'Label 3'], // Rótulos do eixo x
      datasets: [
        {
          label: 'Dados do Gráfico',
          data: [10, 20, 30], // Valores correspondentes aos rótulos
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de preenchimento das barras
          borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
          borderWidth: 1, // Largura da borda das barras
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

  // Envie a página normal com o gráfico como resposta
  res.contentType('text/html');
  res.send(`
    <html>
      <body>
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
          <div style="background-color: white; padding: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
            <h1>Gráfico</h1>
            <img src="data:image/png;base64, ${imageBuffer.toString('base64')}" alt="Gráfico" style="margin-bottom: 20px;">
            <a href="http://localhost:3333/report/download"  style="display: block; text-align: center;">Download PDF</a>
          </div>
        </div>
      </body>
    </html>
  `);
});

router.get('/download', async (req, res) => {
  // Crie um canvas para renderizar o gráfico
  const canvas = createCanvas(800, 600); // Substitua as dimensões conforme necessário
  const ctx = canvas.getContext('2d');

  // Crie o gráfico usando as configurações desejadas
  const chart = new Chart(ctx, {
    type: 'pie', // Tipo de gráfico (pode ser 'bar', 'line', 'pie', etc.)
    data: {
      labels: ['Label 1', 'Label 2', 'Label 3'], // Rótulos do eixo x
      datasets: [
        {
          label: 'Dados do Gráfico',
          data: [10, 20, 30], // Valores correspondentes aos rótulos
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de preenchimento das barras
          borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
          borderWidth: 1, // Largura da borda das barras
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

  // Envie o PDF para download
  res.contentType('application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=chart.pdf');
  res.send(pdfBuffer);
});

module.exports = router;
