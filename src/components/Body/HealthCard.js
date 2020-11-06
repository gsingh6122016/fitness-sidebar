import React from 'react'
import './HealthCard.css'
import ProgressBar from 'react-percent-bar';

function HealthCard({no, title, icon, percentage, color}) {

    const colors = {
        bar: 'red',
        title: {
          text: '#abc123',
          background: 'red',
          type:' '
        }
      }
    return (
        <div className='health__card'>
            <h2>{no}</h2>
            <div className='health__icons'>
            {icon}
            <p>{title}</p>
            </div>
            <ProgressBar fillColor={color} percent={percentage} width='80px' height='4px' />
        </div>
    )
}

export default HealthCard
