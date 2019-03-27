import React, { Component } from 'react';

import { Row, Col } from 'antd';

import Flights from '../../components/Flights/Flights';
import FlightFilter from '../../components/FlightFilter/FlightFilter';

import classes from './FlightSearch.module.css';


class FlightSearch extends Component {
    state = {  

    }

    render() { 
        return ( 
            <React.Fragment> 
                <Row type="flex" className={classes.FlightSearch}>
                    <Col md={5}>
                        <FlightFilter />
                    </Col>
                    <Col md={19}>
                        <Flights />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
 
export default FlightSearch;