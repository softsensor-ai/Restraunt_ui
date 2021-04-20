import React from 'react'
import { Bar,Doughnut, HorizontalBar } from 'react-chartjs-2'
const Chart = ({rest_name,price_level,rating,vicinity,restraunt_type}) => {
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
                responsive: true,
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    label:vicinity
                },
                maintainAspectRatio: false,
                scales:{
                    yAxes:[{
                        ticks:{
                            beginAtZero:true,
                            max:5
                        }
                    }]
                }
            }}
            />

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
                            beginAtZero:true,
                            max:5
                        }
                    }]
                }
            }}
            />
            <HorizontalBar  
            data = {{
                labels: vicinity,
        datasets: [
            {
                label: restraunt_type+' rating',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data:rating
            }
        ]
            }}
            width={400}
            height={400}
            options={{ 
                maintainAspectRatio: false,
                indexAxis: 'y',
                responsive: true,
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                scales:{
                    xAxes:[{
                        ticks:{
                            beginAtZero:true,
                            max:5
                        }
                    }],
                    yAxes:[{
                        scaleLabel: {
                            display: true,
                            labelString: restraunt_type,
                        },
                    }]
                }
            }}
            />
        </>
    )
}

export default Chart
