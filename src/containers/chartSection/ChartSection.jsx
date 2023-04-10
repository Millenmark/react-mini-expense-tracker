import React from 'react'
import './ChartSectionStyle.css'
import { Card, ChartBar } from '../../components'

const ChartSection = ({someProp}) => {
  return (
    <Card>
      <div className="chart">
        {
          someProp.map((some, index) => (
            <ChartBar 
              key={index}
              value={some.value} 
              maxValue={null} 
              label={some.label}
            />
          ))
        }
      </div>
    </Card>
  )
}

export default ChartSection