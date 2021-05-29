import React from 'react'
import { Pie} from 'react-chartjs-2'
const DonoutChart = ({className}) => {
    const data_1 = [41,59];
    const labels = ["more than one orders","once ordered"];
    return (
        <>
            <Pie  
            data = {{
                labels,
        datasets: [
            {
                label: 'Repeat order',
                with:400,
                data: data_1,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                ],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            
        ]
            }}
            options={{ 
                
            }} className={className}
            />

        </>
    )
}

export default DonoutChart
