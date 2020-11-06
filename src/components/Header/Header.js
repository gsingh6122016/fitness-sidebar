import React from 'react'
import './Header.css'
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

function Header() {
    return (
        <div className='header'>
            <div className='user'>
            <img src='https://i.ibb.co/gvqys3Z/FAVPNG-avatar-user-software-developer-SGhq-DNk-Z.png' alt='' />
            <div className='header__details'>
                <h4>Floyd Miles</h4>
                <p>Free account</p>
            </div>
            </div>
            <div className='header__icons'>
                <Badge badgeContent={3} color="primary" overlap="circle">
                    <IconButton children={<NotificationsNoneRoundedIcon />}  />
                </Badge>
            
            <IconButton children={<TuneRoundedIcon />} />
            </div>
            
            
        </div>
    )
}

export default Header
