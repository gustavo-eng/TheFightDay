
import Chart from 'react-apexcharts';

import React from 'react';

import taskService from '../service/taskServicePayment';

const ChartComponent = () => {

    const token = localStorage.getItem('token')
     const qtdPayment = taskService.listPayment()

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


