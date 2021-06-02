import React from 'react'
import { Bar} from 'react-chartjs-2'
const BarChart = ({className}) => {
    const highest_order = ['4008', '813.99', '813.99', '813.99', '813.99', '813.99', '813.99', '813.99', '804.99', '478.56']
    const bottom_data = ['2.06', '2.06', '2.08', '2.08', '2.08', '2.08', '2.08', '2.08', '2.08', '2.08']
    const low_custom_id = ['CustID4893', 'CustID4893', 'CustID251345', 'CustID184596', 'CustID175345', 'CustID229786', 'CustID2530', 'CustID204755', 'CustID2046', 'CustID2530']
    const custom_id = ['CustID26947', 'CustID16581', 'CustID11843', 'CustID16581', 'CustID16581', 'CustID16581', 'CustID16581', 'CustID16581', 'CustID16581', 'CustID12681']
    return (
        <>
            <Bar  
            data = {{
                labels:custom_id,
        datasets: [
            {
                label: 'Top 10 orders',
                data: highest_order,
                backgroundColor: '#87ceeb',
                borderColor: '#87ceeb',
                borderWidth: 1
            },
        ]
            }} className={className}
            />

            <Bar  
            data = {{
                labels:low_custom_id,
        datasets: [
            {
                label: 'Bottom 10 orders',
                data: bottom_data,
                backgroundColor: ['rgba(255, 99, 132, 0.2)'
            ],
                borderColor: '#87ceeb',
                borderWidth: 1
            },
        ],
            }}
            options={{
                indexAxis: 'y',
                yAxes:[{
                    yAxes:[{
                        ticks:{min:2}
                    }]
                }]
            }} className={className}
            />
        </>
    )
}

export default BarChart
