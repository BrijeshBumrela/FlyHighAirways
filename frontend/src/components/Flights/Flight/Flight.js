import React from 'react';

import { Col, Row, Button } from 'antd';
import classes from './Flight.module.css';

const flight = (props) => (
    <Row type="flex" className={classes.Flight}>
        <Col lg={12}>
            <div className={classes.TimingBoxHeader}>
                <div className={classes.ToCenter}>
                    <h2>{props.startTime}</h2>
                    <h4>{props.source.toUpperCase()}</h4>
                </div>
                <div className={classes.ToCenter}>
                    <h3>{props.nonStop ? 'NON STOP' : '1 STOP'}</h3>
                    <h5>1h 55m</h5>
                </div>
                <div className={classes.ToCenter}>
                    <h2>{props.endTime}</h2>
                    <h4>{props.destination.toUpperCase()}</h4>
                </div>
            </div>
        </Col>
        <Col lg={4}>
            <div className={classes.Class}>
                <h4 className={classes.RemainingSeats}>{props.economy.seats_remaining} seats remaining</h4>
                <h4>INR <span className={classes.ClassPrice}>{props.economy.fare}</span></h4>
            </div>
        </Col>
        <Col lg={4}>
            <div className={classes.Class}>
                <h4 className={classes.RemainingSeats}>{props.business.seats_remaining} seats remaining</h4>
                <h4>INR <span className={classes.ClassPrice}>{props.business.fare}</span></h4>
            </div>
        </Col>
        <Col lg={4}>
            <div className={classes.BookNow}>
                <Button type="primary">Book Now</Button>
            </div>
        </Col>
    </Row>
)
 
export default flight;