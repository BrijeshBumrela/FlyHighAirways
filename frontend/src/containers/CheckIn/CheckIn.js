import React, { Component } from 'react';

import classes from './CheckIn.module.css';

import SeatRow from '../../components/SeatRow/SeatRow';
import Seat from '../../components/SeatRow/Seat/Seat';

class checkIn extends Component {

    state = {
        seats: [
            {
                seat_number: '1A',
                special: true,
                is_booked: false
            },
            {
                seat_number: '1B',
                special: false,
                is_booked: true
            },
            {
                seat_number: '1C',
                special: false,
                is_booked: true
            },
            {
                seat_number: '1D',
                special: false,
                is_booked: false
            },
            {
                seat_number: '1E',
                special: false,
                is_booked: false
            },
            {
                seat_number: '1F',
                special: true,
                is_booked: false
            },
            {
                seat_number: '2A',
                special: true,
                is_booked: false
            },
            {
                seat_number: '2B',
                special: false,
                is_booked: true
            },
            {
                seat_number: '2C',
                special: false,
                is_booked: false
            },
        ]
    }

    arrangeSeats = () => {
        // * List of List of seats
        let seatList = [];

        // * Inner List (Made 0 after rowLengthCounter)

        let miniList = [];
        let rowLengthCounter = 0;
        const rowLength = 6;
        for (let i = 0; i < this.state.seats.length; i++) {
            if (rowLengthCounter === rowLength) {
                seatList.push(miniList);
                rowLengthCounter = 0;
                miniList = [];
            }
            // Last Iteration
            if (i === this.state.seats.length - 1) {
                seatList.push(miniList);
            }

            rowLengthCounter += 1;
            miniList.push(this.state.seats[i]);
        }
    }

    render() {

        


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
                        <div>AVAILABLE</div>
                    </div>
                    <div className={classes.BlockInfo}>
                        <Seat color="#00BFFF" className={classes.RefBlock}/> 
                        <div>AVAILABLE - SPECIAL</div>
                    </div>
                    <div className={classes.BlockInfo}>
                        <Seat color="#4169E1" className={classes.RefBlock}/>
                        <div>FILLED</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default checkIn;