import React from 'react';

import Seat from './Seat/Seat';
import classes from './SeatRow.module.css';

const seatRow = (props) => {
    return (
        <div className={classes.SeatRow}>  
            <div className={classes.SeatSide}>
                <Seat name="1A" />
                <Seat name="1B" />
                <Seat name="1C" />
            </div>
            <div className={classes.SeatSide}>
                <Seat name="1D" />
                <Seat name="1E" />
                <Seat name="1F" />
            </div>
        </div>
    );
}
 
export default seatRow;