import React, { Component } from 'react';


import Paypal from "../../components/Paypal/Paypal";

import { Modal } from 'antd';

import classes from './CheckIn.module.css';


import SeatRow from '../../components/SeatRow/SeatRow';
import Seat from '../../components/SeatRow/Seat/Seat';

class checkIn extends Component {

    state = {
        visible: false,
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
            {
                seat_number: '2D',
                special: true,
                is_booked: false
            },
            {
                seat_number: '2E',
                special: false,
                is_booked: true
            },
            {
                seat_number: '2F',
                special: false,
                is_booked: false
            }
        ]
    }

    showModal = () => {
        this.setState({
          visible: true
        });
    };
    
    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false
        });
    };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false
        });
    };

    render() {

        

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

        return (  

            <React.Fragment>

                <div>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <h1>Your Total Amount is 300</h1>
                        <Paypal
                            toPay={300}
                            transactionError={err => this.transactionError(err)}
                            transactionCancelled={data => this.transactionCancelled(data)}
                            transactionSuccess={payment => this.transactionSuccess(payment)}
                        />
                    </Modal>
                </div>

                <div className={classes.Page}>
                    <div className={classes.Plane}>
                        <div className={classes.Cockpit}>
                            &nbsp;
                        </div>

                        <div className={classes.Body}>
                            {
                                seatList.map((seat, index) => <SeatRow onClick={this.showModal} key={index} seat={seat}/>)
                            }
                        </div>

                    </div>
                    <div className={classes.Reference}>
                        <div className={classes.BlockInfo}>
                            <Seat isBooked={false} special={false} className={classes.RefBlock}/>
                            <div>AVAILABLE</div>
                        </div>
                        <div className={classes.BlockInfo}>
                            <Seat isBooked={false} special={true} className={classes.RefBlock}/> 
                            <div>AVAILABLE - SPECIAL</div>
                        </div>
                        <div className={classes.BlockInfo}>
                            <Seat isBooked={true} special={false} className={classes.RefBlock}/>
                            <div>FILLED</div>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }
}

export default checkIn;