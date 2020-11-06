import React from 'react'
import './Footer.css'
import Trainer from './Trainer'
function Footer() {
    return (
        <div className='footer'>
            <div className='trainers'>
            <h4>Your Trainers</h4>
            <Trainer
            name='Jhon Kavanagh'
            post='MMA coach'
            img='https://i.ibb.co/gvqys3Z/FAVPNG-avatar-user-software-developer-SGhq-DNk-Z.png'
            />
            <Trainer
            name='Jacob Jones'
            post='Boxing coach'
            img='https://i.ibb.co/gvqys3Z/FAVPNG-avatar-user-software-developer-SGhq-DNk-Z.png'
            />
            </div>
           
        </div>
    )
}

export default Footer
