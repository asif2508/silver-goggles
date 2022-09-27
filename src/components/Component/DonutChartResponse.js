import React from 'react';
import { Chart } from "react-google-charts";
import Colors from '../../utils/Colors';

const DonutChartResponse = ({ response }) => {
    const options = {
        pieHole: 0.7,
        is3D: false,
        width: 300,
        legend: "none",
        pieSliceText: "none",
        pieStartAngle: 105,
        tooltip: { trigger: "none" },
        slices: {
            0: { color: Colors['primary-dark'], },
            1: { color: Colors.donutGrey },
        },
        backgroundColor: { fill: 'transparent' }
    };

    const data = [
        ["Task", "Hours per Day"],
        ["Work", response],
        ["Work", 100 - response],
    ];

    return (
        <div className='flex flex-col -mt-8 w-min'>
            <Chart
                chartType="PieChart"
                height="300px"
                className='flex justify-center'
                data={data}
                options={options}
            />
            <div className='font-primayfont text-dark-blue justify-center flex-col text-center -mt-44 mb-44 w-72 ml-2'>
                <p className='text-2xl font-bold'>{response}%</p>
                <p className='text-xs font-bold'>Response time</p>
                <p className='text-xs'>Excellent</p>
            </div>
        </div>
    )
}

export default DonutChartResponse