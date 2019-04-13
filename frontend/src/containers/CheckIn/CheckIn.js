import React from 'react';

import classes from './CheckIn.module.css';

import SeatRow from '../../components/SeatRow/SeatRow';
import Seat from '../../components/SeatRow/Seat/Seat';

const checkIn = (props) => {
    return (  
        <div className={classes.Page}>
            <div className={classes.Plane}>
    
                <div className={classes.Cockpit}>
                    &nbsp;
                </div>

                <div className={classes.Body}>
                    <SeatRow />
                    <SeatRow />
                    <SeatRow />
                    <SeatRow />
                    <SeatRow />
                    <SeatRow />
                    <SeatRow />
                    <SeatRow />
                </div>

            </div>

            <div className={classes.Reference}>
                <div className={classes.BlockInfo}>
                    <Seat color="#FF8C00" className={classes.RefBlock}/>
                    <div>AVAILABLE - ECONOMY</div>
                </div>
                <div className={classes.BlockInfo}>
                    <Seat color="#00BFFF" className={classes.RefBlock}/> 
                    <div>AVAILABLE - BUSINESS</div>
                </div>
                <div className={classes.BlockInfo}>
                    <Seat color="#4169E1" className={classes.RefBlock}/>
                    <div>FILLED</div>
                </div>
            </div>
        </div>
    );
}

export default checkIn;