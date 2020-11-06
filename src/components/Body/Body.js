import React from 'react'
import './Body.css'
import HealthCard from './HealthCard'
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton, Divider } from '@material-ui/core';
import Training from './Training';

function Body() {
    return (
        <div className='body'>
            <div className='health'>
                <h4>Health</h4>
                <div className='health__cards'>
                    <HealthCard
                     no='6:25'
                     title='Hours'
                     icon={<SlowMotionVideoIcon />}
                     percentage={65}
                     color='#5198fe'
                     />
                     <Divider light orientation='vertical' flexItem />
                    <HealthCard
                     no='120'
                     title='Bpm'
                     icon={<FavoriteBorderIcon />}
                     percentage={80}
                     color='#fd877e'
                     />
                     <Divider light orientation='vertical' flexItem />
                    <HealthCard
                     no='1.84' 
                     title='Kcal'
                     icon={<DirectionsRunIcon />}
                     percentage={25}
                     color='#83d57c'
                    />
                    </div>
            <div className='signup'>
            <img src='https://i.ibb.co/1dXKfgJ/FAVPNG-web-development-php-software-developer-programmer-web-design-Ppx0kwc-J.png' />
            <div className='signup__right'>
                <p>Sign up for a personal ratiner to improve your result.</p>
                <button>
                    Sign Up
                </button>
            </div>
            </div>
            </div>

            <div className='trainings'>
            <h4>Today trainings</h4>
            <Training 
            color='#4c95fe'
            leftTitle='Box'
            leftClub='Sport Club'
            leftTime='10:00'
            rightTimeOne={40}
            rightTitleOne='Warm-up'
            rightTimeTwo={20}
            rightTitleTwo='Stretch'
            />
            <Training 
            color='#ff7369'
            leftTitle='Crossfit'
            leftClub='Sport Club'
            leftTime='12:00'
            rightTimeOne={20}
            rightTitleOne='Warm-up'
            rightTimeTwo={20}
            rightTitleTwo='Pull-ups'
            />
            <span>
                <IconButton children={<MoreHorizIcon />} />
            </span>
            </div>

        </div>
    )
}

export default Body
