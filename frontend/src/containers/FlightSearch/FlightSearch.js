import React, { Component } from 'react';

import { Row, Col, Skeleton } from 'antd';

import Flights from '../../components/Flights/Flights';
import FlightFilter from '../../components/FlightFilter/FlightFilter';

import classes from './FlightSearch.module.css';


class FlightSearch extends Component {
    state = {  
        flights: (
            <React.Fragment>
                <Skeleton />
            </React.Fragment>
        )
    }

    componentDidMount() {
        window.setTimeout( () => {
            this.setState({ flights: <Flights/> })
        }, 2000)
    }


    render() { 

        console.log('infine');
        return ( 
            <React.Fragment> 
                <Row type="flex" className={classes.FlightSearch}>
                    <Col md={5}>
                        <FlightFilter />
                    </Col>
                    <Col md={19}>
                        {this.state.flights}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
 
export default FlightSearch;