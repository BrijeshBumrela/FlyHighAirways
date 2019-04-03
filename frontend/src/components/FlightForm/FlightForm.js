import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Select, Popover, Button, Calendar } from 'antd';



const Option = Select.Option;



class flightForm extends Component {

    state = {
        calendarPopUp: false,
        formData: {
            source: '',
            destination: '',
            time: ''
        }
    }
 
    onVisibleHandler = () => {
        this.setState((prevState) => {
            return { calendarPopUp: !prevState.calendarPopUp }
        })
    }

    // location ==> Source or destination
    onCitySelectHandler = (cityData, location) => {
        console.log(cityData, location);

        const updatedFormData = { ...this.state.formData };
        updatedFormData[location] = cityData;
        this.setState({ formData:updatedFormData });
    }

    onDateSelectHandler = (data) => {
        this.onVisibleHandler();
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onFlightFormAdded(this.state.formData);
    }

    render () {
    
        const popUpCalendar = (
            <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar fullscreen={false} onSelect={(date) => this.onDateSelectHandler(date)} />
            </div>
        )

        return (
            <form onSubmit={(e) => this.onSubmitHandler(e)}>  
                <div>
                    <Select 
                        placeholder="Source Airport" 
                        style={{ width: 120 }}
                        onSelect={(value) => this.onCitySelectHandler(value, 'source')}
                        value={this.state.formData.source}
                    >
                        
                        <Option value="jack">Jack</Option>
                        <Option value="lucica">Lucy</Option>
                        <Option value="disabled">Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Select 
                        placeholder="Destination Airport" 
                        style={{ width: 120 }}
                        onSelect={(value) => this.onCitySelectHandler(value, 'destination')}                    
                        value={this.state.formData.destination}                    
                        >
                        <Option value="jack">Jack</Option>
                        <Option value="lucica">Lucy</Option>
                        <Option value="disabled">Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Popover
                        content={popUpCalendar}
                        title="Title"
                        trigger="click"
                        visible={this.state.calendarPopUp}
                    >
                        {/* <Button type="primary" onClick={this.onVisibleHandler}>Click me</Button> */}
                    </Popover>
                </div>
                <Button type="primary" htmlType="submit">Search Flights</Button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFlightFormAdded:(flightData) => dispatch({ type: 'ADD_FLIGHT_FORM', flightData })        
    }
};

 
export default connect(null, mapDispatchToProps)(flightForm);