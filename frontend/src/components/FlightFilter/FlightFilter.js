import React from 'react';

import { Radio, Checkbox, Divider } from 'antd';

import classes from './FlightFilter.module.css';

const RadioGroup = Radio.Group;

const flightFilter = (props) => {
    return (  
        <div className={classes.FilterColumn}>
            <div className={classes.FlightType}>
                <h2 className={classes.TypeHeader}>Flight Type</h2>
                <RadioGroup className={classes.FlightOptions}>
                    <Radio value={1}>Non-Stop</Radio><br />
                    <Radio value={2}>Stop</Radio>
                </RadioGroup>            
            </div>

            <Divider />

            <div className={classes.FlightType}>
                <h2 className={classes.TypeHeader}>Price Range</h2>
                <p>
                    <Checkbox 
                        checked
                        disabled={false}
                    />
                    <span>&lt; 3000</span>
                </p>
                <p>
                    <Checkbox 
                        checked
                        disabled={false}
                    />
                    <span>&lt; 5000</span>
                </p>
                <p>
                    <Checkbox 
                        checked
                        disabled={false}
                    />
                    <span>&lt; 10000</span>
                </p>
                <p>
                    <Checkbox 
                        checked
                        disabled={false}
                    />
                    <span>&gt; 10000</span>
                </p>
            </div>

            <Divider />

            <div className={classes.FlightType}>
                <h2 className={classes.TypeHeader}>Flight Time</h2>
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