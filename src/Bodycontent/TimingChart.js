import React from 'react'
import { Bar,Line } from 'react-chartjs-2'
const TimingChart = ({data_1,data_2,labels,label1,label2}) => {
    return (
        <>
            <Line  
            data = {{
                labels,
        datasets: [
            {
                label:label1,
                data: data_1,
                backgroundColor: '#87ceeb',
                borderColor: '#87ceeb',
                borderWidth: 1
            },
            {
                label: label2,
                data: data_2,
                backgroundColor: 'orange',
                borderColor: 'orange',
            }
        ]
            }}
            options={{ 
                maintainAspectRatio: false,
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

export default TimingChart

