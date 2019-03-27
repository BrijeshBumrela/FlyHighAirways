import React from 'react';

import { Radio, Checkbox } from 'antd';

import classes from './FlightFilter.module.css';

const RadioGroup = Radio.Group;


const flightFilter = (props) => {
    return (  
        <div className={classes.FilterColumn}>
            <div className={classes.FlightType}>
                <h3>Flight Type</h3>
                <RadioGroup>
                    <Radio value={1}>Non-Stop</Radio>
                    <Radio value={2}>Stop</Radio>
                </RadioGroup>
            </div>

            <div>
                <h3>Flight Timing</h3>
                <p>
                    <Checkbox 
                        checked
                        disabled={false}
                    />
                    <span>Morning</span>
                </p>
                <p>
                    <Checkbox 
                        checked
                        disabled={false}
                    />
                    <span>Afternoon</span>
                </p>
                <p>
                    <Checkbox 
                        checked
                        disabled={false}
                    />
                    <span>Evening</span>
                </p>
                <p>
                    <Checkbox 
                        checked
                        disabled={false}
                    />
                    <span>Night</span>
                </p>
            </div>
        </div>
    );
}
 
export default flightFilter;