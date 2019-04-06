import React, { Component } from "react";

import { Row, Col } from "antd";
import axios from 'axios';

import Flights from "../../components/Flights/Flights";
import FlightFilter from "../../components/FlightFilter/FlightFilter";

import CustomSkeleton from "../../components/UI/Skeleton/Skeleton";

import classes from "./FlightSearch.module.css";

class FlightSearch extends Component {
    state = {
        loading: true
    };
  
    componentDidMount() {
        axios.get('https://flyhighairways-2cfb4.firebaseio.com/flight.json')
            .then(res => console.log(res))
            .catch(err => console.log('there was an ', err));
    }

    render() {

        let flightList = <CustomSkeleton />

        if (!this.state.loading) {
          flightList = <Flights />
        }

        return (
            <React.Fragment>
                <Row type="flex" className={classes.FlightSearch}>
                    <Col md={5}>
                        <FlightFilter />
                    </Col>
                    <Col md={19}>{flightList}</Col>
                </Row>
            </React.Fragment>
        );
      }
}

export default FlightSearch;
