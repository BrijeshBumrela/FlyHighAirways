import React, { Component } from "react";

import { Row, Col } from "antd";
import axios from 'axios';

import Flights from "../../components/Flights/Flights";
import FlightFilter from "../../components/FlightFilter/FlightFilter";

import CustomSkeleton from "../../components/UI/Skeleton/Skeleton";

import classes from "./FlightSearch.module.css";

class FlightSearch extends Component {
    state = {
        loading: true,
        flights: null,

        
    };
  
    componentDidMount() {
        axios.get('https://flyhighairways-2cfb4.firebaseio.com/flight.json')
            .then(res => {
                this.setState({ loading: false, flights: res.data })
            })
            .catch(err => console.log('there was an ', err));
    }

    render() {

        const { flights } = this.state;

        let flightList = <CustomSkeleton />
        let flightListArray = [];

        if (!this.state.loading && flights) {
            for (let flight in flights) {
                flightListArray.push(flights[flight])
            }
        }

        if (flightListArray.length > 0) {
            flightList = [];
            flightList = flightListArray.map((flight, index) => {
                return (
                    <Flights 
                        key={index}
                        startTime={flight.start_time}
                        endTime={flight.end_time}
                        nonStop={flight.nonStop}
                        business={flight.business}
                        economy={flight.economy}
                    />
                )  
            })
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
