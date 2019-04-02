import React, { Component } from 'react';

import { Select, Popover, Button, Calendar } from 'antd';

const Option = Select.Option;



class flightForm extends Component {

    state = {
        calendarPopUp: false
    }
 
    onVisibleHandler = () => {
        this.setState((prevState) => {
            return { calendarPopUp: !prevState.calendarPopUp }
        })
    }

    onSelectHandler = (data) => {
        this.onVisibleHandler();
    }

    render () {
    
        const PopUpCalendar = (
            <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar fullscreen={false} onSelect={(date) => this.onSelectHandler(date)} />
            </div>
        )

        return (  
            <div>
                <Select placeholder="Source Airport" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucica">Lucy</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select placeholder="Destination Airport" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucica">Lucy</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Popover
                    content={PopUpCalendar}
                    title="Title"
                    trigger="click"
                    visible={this.state.calendarPopUp}
                >
                    <Button type="primary" onClick={this.onVisibleHandler}>Click me</Button>
                </Popover>
            </div>
        );

    }
}
 
export default flightForm;