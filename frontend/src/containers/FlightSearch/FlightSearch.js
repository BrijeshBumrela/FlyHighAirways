import React, { Component } from 'react';

import { Row, Col } from 'antd';

import Flights from '../../components/Flights/Flights';
import FlightFilter from '../../components/FlightFilter/FlightFilter';

import CustomSkeleton from '../../components/UI/Skeleton/Skeleton';

import classes from './FlightSearch.module.css';


class FlightSearch extends Component {
    state = {  
        flights: (<CustomSkeleton />)
    }

    componentDidMount() {
        window.setTimeout( () => {
            this.setState({ flights: <Flights/> })
        }, 2000)
    }


    render() { 

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