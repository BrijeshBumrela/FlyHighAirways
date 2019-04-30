import React from 'react';

import Seat from './Seat/Seat';
import classes from './SeatRow.module.css';

const seatRow = (props) => {

    console.log('seats in row', props.seat);

    return (
        <div className={classes.SeatRow}>  
            <div className={classes.SeatSide}>
                <Seat name={props.seat[0].seat_number} />
                <Seat name={props.seat[1].seat_number} />
                <Seat name={props.seat[2].seat_number} />
            </div>
            <div className={classes.SeatSide}>
                <Seat name={props.seat[3].seat_number} />
                <Seat name={props.seat[4].seat_number} />
                <Seat name={props.seat[5].seat_number} />
            </div>
        </div>
    );
}
 
export default seatRow;