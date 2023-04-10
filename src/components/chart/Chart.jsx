import React from 'react'
import './ChartStyle.css'
import Bar from '../bar/Bar'

const Chart = ({dataPoints}) => {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...dataPointValues)
  

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <Bar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart