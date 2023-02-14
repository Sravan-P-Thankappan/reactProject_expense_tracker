import React from 'react'
import './ChartBar.css'
const ChartBar = (props) => {
     
    console.log(props.value, props.maxValue)
    let barHeight = '0%'
    
    if(props.maxValue>0){
        barHeight = Math.round((props.value/props.maxValue)*100)+'%'
    }

    // console.log('barHeight ',barHeight,  props.value)
    return (
        <div className='chart-bar'>

            <div className="chart-bar__inner">          
                <div className="chart-bar__fill" style={{height:barHeight}}></div>        
            </div>

            <div className="chart-bar__label">{props.label}</div>

            
        </div>
    )
}

export default ChartBar