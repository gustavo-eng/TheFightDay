
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import controllServicePayment from "../service/taskServicePayment";
import taskService from '../service/taskServiceUser';
const ChartComponent = () => {

    const token = localStorage.getItem('token')
    const [qtdPayments, setQtdPayments] = useState(0)
    const [qtdCompetition, setQtdPayments] = useState(0)
    // const a = []
    // a.length
     useEffect(() => {
        controllServicePayment.listPayment(token)
        .then(response => response.json())
        .then(data => {
            console.log('data ====> ');
            console.log(data.payments);
            setQtdPayments(data.payments.length)
            console.log('QUANTIDADE PAGAMENTOO')
            console.log(qtdPayments)
        })
        .catch(error => console.log(error));
        taskService.listCompetition(token)
        .then(response => response.json())
        .then(data => {
            console.log('data ====> ');
            console.log(data.payments);
            setQtdPayments(data.payments.length)
            console.log('QUANTIDADE PAGAMENTOO')
            console.log(qtdPayments)
        })

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
        data: [10, qtdPayments, 35]
      }]

  return <Chart options={options} series={series} type='bar' width={250} height={250}/>;
};

export default ChartComponent;


