import React from 'react';
import classes from './Seat.module.css';

const seat = (props) => {

    console.log('booked?', props.isBooked);
    console.log('special?', props.special)

    let backgroundColor = null;
    if (props.isBooked) {
        backgroundColor = "#4169E1"
    }
    else if (props.special) {
        backgroundColor = "#00BFFF"
    }
    else {
        backgroundColor = "#FF8C00"
    }



    return (  
        <span className={classes.Seat} style={{backgroundColor}}>
            {props.name}
        </span>
    );
}
 
export default seat;