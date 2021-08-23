import React, {useState} from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';

const options = {
                    
    title: {
        text: 'Coin Candle Chart'
    },
    rangeSelector: {
        selected: 1
    },
    series: [
        {
            //turboThreshold: 4000,
            //type: 'candlestick',
            name: "Cardano",
            data: [1,2,4,5], 
            // dataGrouping: {
            //     units: [
            //         [
            //             'day', // unit name
            //             [1] // allowed multiples
            //         ], [
            //             'month',
            //             [1, 2, 3, 4, 6]
            //         ]
            //     ]
            // }
    }]
};

const StockChart = (props) => {
    return(
        <div >
                <HighchartsReact highcharts={Highcharts} 
                                constructorType={"stockChart"} 
                                options={options} />

        </div>
    )
}

export default StockChart