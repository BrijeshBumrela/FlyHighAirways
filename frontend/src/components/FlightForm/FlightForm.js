import React, { Component } from "react";

import { connect } from "react-redux";

import { Select, Popover, Button, Calendar, Input } from "antd";

import classes from './FlightForm.module.css';

const Option = Select.Option;

class flightForm extends Component {
    state = {
        calendarPopUp: false,
        formData: {
            source: "",
            destination: "",
            time: ""
        },
        validity: {
            source: false,
            destination: false,
            time: false
        },
        isValid: false
    };

    // Whether to display the calendar
    onVisibleHandler = () => {
        this.setState(prevState => {
            return { calendarPopUp: !prevState.calendarPopUp };
        });
    };

    // location ==> Source or destination
    onCitySelectHandler = (cityData, location) => {

        const updatedFormData = { ...this.state.formData };
        updatedFormData[location] = cityData;

        const updatedValidity = { ...this.state.validity };
        updatedValidity[location] = cityData == '' ? false : true;

        this.setState({ formData: updatedFormData, validity: updatedValidity });
    };

    // After selecting the date
    onDateSelectHandler = data => {
        this.onVisibleHandler();

        const updatedFormData = { ...this.state.formData };
        updatedFormData.time = data.format('L');

        const updatedValidity = { ...this.state.validity };
        updatedValidity.time = true;

        if (data == '') {
            updatedValidity.time = false;
        }

        this.setState({ formData: updatedFormData, validity: updatedValidity });
    };

  onSubmitHandler = (event) => {
      event.preventDefault();

      if (!(this.state.validity.time && this.state.validity.source && this.state.validity.destination)){
          console.log('error');
          return;  
      }

      this.props.onFlightFormAdded(this.state.formData);
  };

  render() {
    const popUpCalendar = (
      <div style={{ width: 300, border: "1px solid #d9d9d9", borderRadius: 4 }}>
        <Calendar
          fullscreen={false}
          onSelect={date => this.onDateSelectHandler(date)}
        />
      </div>
    );

    console.log(this.state.formData);

    const data = {
        ...this.state.formData
    }

    return (
        <form>
            <div>   
                <div className={classes.optionWrapper}>

                    <Select
                          showSearch
                          style={{ width: 200 }}
                          placeholder="Source Airport"
                          optionFilterProp="children"
                          onSelect={cityName => this.onCitySelectHandler(cityName, 'source')}
                          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                      >
                        <Option value="chennai">Chennai</Option>
                        <Option value="kolkata">Kolkata</Option>
                        <Option value="mumbai">Mumbai</Option>
                        <Option value="pune">Pune</Option>
                        <Option value="indore">Indore</Option>
                        <Option value="delhi">Delhi</Option>
                    </Select> 

                </div>

                <div className={classes.optionWrapper}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Destination Airport"
                        optionFilterProp="children"
                        onSelect={cityName => this.onCitySelectHandler(cityName, 'destination')}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="chennai">Chennai</Option>
                        <Option value="kolkata">Kolkata</Option>
                        <Option value="mumbai">Mumbai</Option>
                        <Option value="pune">Pune</Option>
                        <Option value="indore">Indore</Option>
                        <Option value="delhi">Delhi</Option>
                    </Select>
                </div>

                <div className={classes.dateWrapper}>
                    <Input type="text" value={this.state.formData.time}/>
                    <Popover
                        content={popUpCalendar}
                        title="Please Select the date of flight"
                        trigger="click"
                        visible={this.state.calendarPopUp}
                    >
                        <Button type="primary" onClick={this.onVisibleHandler}>Select A Date</Button>
                    </Popover>
                </div>

                
            </div>

            <Button 
                type="primary" 
                htmlType="submit"
                onClick={e => this.props.formSubmit(e)}    
            >
                Search Flights
            </Button>
        </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFlightFormAdded: flightData =>
      dispatch({ type: "ADD_FLIGHT_FORM", flightData })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(flightForm);
