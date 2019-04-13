import React from 'react';
import classes from './Seat.module.css';

const seat = (props) => {
    return (  
        <span className={classes.Seat} style={{backgroundColor: props.color}}>
            {props.name}
        </span>
    );
}
 
export default seat;