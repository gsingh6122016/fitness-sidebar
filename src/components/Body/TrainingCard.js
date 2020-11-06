import React from 'react'
import './TrainingCard.css'

function TrainingCard({time, title}) {
    return (
        <div className='training__card'>
            <h3>{time}</h3>
            <p>min</p>
            <span className='training__card__title'>
            {title}
            </span>
           
        </div>
    )
}


export default TrainingCard
