import React from 'react'
import './Training.css'
import TrainingCard from './TrainingCard'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';

function Training({color, leftTitle, leftClub, leftTime, rightTimeOne, rightTitleOne, rightTitleTwo, rightTimeTwo}) {
    const mystyle = {
        color: "white",
        backgroundColor: color,
        // boxShadow: `0px 10px 4px -6px ${color}`,
       
      };
    return (

        <div className='training' style={mystyle} >
            <div className='training__left'>
                <h4>{leftTitle}</h4>
                <p>{leftClub}</p>
                <span className='training__left__timing'>
                  {leftTime}
                </span>
            </div>

            <div className='training__right'>
                <TrainingCard
                time={rightTimeOne}
                title={rightTitleOne}
                />
                <TrainingCard 
                time={rightTimeTwo}
                title={rightTitleTwo}
                />
         
            </div>
            <span>
                <IconButton children={<MoreVertIcon />} />       
                </span>
        </div>
    
    )
}

export default Training
