import React from 'react'
import { Bar,Doughnut, HorizontalBar,VerticalBar } from 'react-chartjs-2'
const Chart = ({rest_name =['a','b','c','d','e','f','a','b','c','d','e','f'],price_level=[12,34,-56,78,56,34,12,34,-56,78,56,34],rating=[-12,-34,56,-78,67,-45,-12,-34,56,-78,67,-45],vicinity='GH',restraunt_type}) => {
    const data_1 = [7, 6, 3, 5, 4, 2, 3, 6, 8, 5, 7];
    const data_2 = [0, -4, -2, 0, -5, -3, 0, 0, -2, -5, -3];
    const labels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
    return (
        <>
            <Bar  
            data = {{
                labels,
        datasets: [
            {
                label: 'Repeat order',
                data: data_1,
                backgroundColor: '#ff0018',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'New order',
                data: data_2,
                backgroundColor: '#000',
                borderColor: 'rgba(255, 99, 132, 1)',
            }
        ]
            }}
            options={{ 
                legend: { display: false },
                title: {
                    display: false,
                },
                scales:{
                    xAxes:[{
                        stacked:true
                    }],
                    yAxes:[{
                        stacked:true,
                        
                    }]
                }
            }}
            />

        {/* <Bar  
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
            /> */}
        </>
    )
}

export default Chart
