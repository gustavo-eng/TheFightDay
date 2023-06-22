
import Chart from 'react-apexcharts';

import React, { useEffect } from 'react';

import taskService from '../service/taskServicePayment';

const ChartComponent = () => {

    const token = localStorage.getItem('token')
     const qtdPayment = taskService.listPayment(token)

     useEffect(() => {
        console.log('Quantidade de qtdPaymtn data')
        console.log(qtdPayment.then(data => {
            console.log(data)
        }))
    })

    const options= {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: ['Usuários', 'Pagamentos ','Competições']
        }
    }
      const series= [{
        name: 'series-1',
        data: [30, 40, 35]
      }]

  return <Chart options={options} series={series} type='bar' width={250} height={250}/>;
};

export default ChartComponent;


