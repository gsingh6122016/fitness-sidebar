import React from 'react'
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import { withStyles } from '@material-ui/core/styles';
import './Trainer.css'
import { Badge, IconButton } from '@material-ui/core';


  const styles = theme => ({
    customBadge: {
      backgroundColor: " rgb(85, 243, 124)",
    }
  });

function Trainer(props) {
    const { classes } = props;
    const { name, post, img } =  props;
    return (
        <div className='trainer'>
            <div className='trainer__left'>
            <Badge
            classes={{ badge: classes.customBadge }}
              overlap="circle"
               badgeContent=" "
                variant="dot"
                >
            <img className='trainer__img' src={img}></img>
            </Badge>
            <div className='trainer__details'>
                <h4>{name}</h4>
                <p>{post}</p>
            </div>
            </div>
           <div className='msg__icon'>
           <IconButton children={<SmsOutlinedIcon />} />
           </div>
            
            
        </div>
    )
}

export default withStyles(styles)(Trainer)
