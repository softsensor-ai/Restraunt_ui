import React from 'react'
import { Bar,Doughnut } from 'react-chartjs-2'
const Chart = ({rest_name,price_level,rating}) => {
    return (
        <>
            <Bar  
            data = {{
                labels: rest_name,
        datasets: [
            {
            label: 'rating',
                data: rating,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'price_level',
                data: price_level,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
            }}
            width={400}
            height={400}
            options={{ 
                maintainAspectRatio: false,
                scales:{
                    yAxes:[{
                        ticks:{
                            beginAtZero:true
                        }
                    }]
                }
            }}
            />
        </>
    )
}

export default Chart
