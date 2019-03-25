import React from 'react';

import { Col, Row, Icon, Button } from 'antd';
import classes from './Flight.module.css';

const flight = (props) => (
    <Row type="flex" className={classes.Flight}>
        <Col lg={12}>
            <div className={classes.TimingBoxHeader}>
                <div className={classes.ToCenter}>
                    <h2>07:00</h2>
                    <h4>MAA</h4>
                </div>
                <div className={classes.ToCenter}>
                    <Icon style={{fontSize: '2rem'}} type="dingding" />
                    <h5>1h 55m</h5>
                </div>
                <div className={classes.ToCenter}>
                    <h2>07:00</h2>
                    <h4>BOM</h4>
                </div>
            </div>
        </Col>
        <Col lg={4}>
            <div className={classes.Class}>
                <h4>3 seats remaining</h4>
                <h4>INR <span className={classes.ClassPrice}>3589</span></h4>
            </div>
        </Col>
        <Col lg={4}>
            <div className={classes.Class}>
                <h4>3 seats remaining</h4>
                <h4>INR <span className={classes.ClassPrice}>7117</span></h4>
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