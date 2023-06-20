var express = require('express');
var router = express.Router();
const Chart = require('chart.js')
const puppeteer = require('puppeteer')

router.get('/', async (req, res) => {
    // const chart = new Chart(/* Configurações do gráfico */);
    const chart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico (pode ser 'bar', 'line', 'pie', etc.)
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'], // Rótulos do eixo x
          datasets: [
            {
              label: 'Dados do Gráfico',
              data: [10, 20, 30], // Valores correspondentes aos rótulos
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de preenchimento das barras
              borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
              borderWidth: 1 // Largura da borda das barras
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true // Define o início do eixo y em zero
            }
          }
        }
      });


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