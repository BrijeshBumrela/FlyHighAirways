import React from 'react';

import { Radio, Checkbox, Divider } from 'antd';

import classes from './FlightFilter.module.css';

const RadioGroup = Radio.Group;

const flightFilter = (props) => {
    return (  
        <div className={classes.FilterColumn}>
            <div className={classes.FlightType}>
                <h2 className={classes.TypeHeader}>Flight Type</h2>
                <RadioGroup 
                    className={classes.FlightOptions} 
                    value={props.filterInfo.flightType}
                    onChange={(e) => props.flightTimeType(e)}
                >
                    
                    
                    <Radio value={1}>Non-Stop</Radio><br />
                    <Radio value={2}>Stop</Radio><br />
                    <Radio value={3}>All</Radio>
                </RadioGroup>            
            </div>

            <Divider />

            <div className={classes.FlightType}>
                <h2 className={classes.TypeHeader}>Price Range</h2>

                <RadioGroup 
                    className={classes.FlightOptions} 
                    value={props.filterInfo.priceRange}
                    onChange={e => props.flightPriceType(e)}
                >
                    
                    <Radio value={3000}>
                        <span>&lt; 3000</span>
                    </Radio>
                    <br />
                    
                    <Radio value={5000}>
                        <span>&lt; 5000</span>
                    </Radio>
                    <br />

                    <Radio value={7000}>
                        <span>&lt; 7000</span>
                    </Radio>
                    <br />

                    <Radio value={9000}>
                        <span>&lt; 9000</span>
                    </Radio>
                    <br />

                </RadioGroup>                 
            </div>

            <Divider />

            <div className={classes.FlightType}>
                <h2 className={classes.TypeHeader}>Flight Time</h2>
                <p>
                    <Checkbox 
                        disabled={false}
                    />
                    <span>Morning</span>
                </p>
                <p>
                    <Checkbox 
                        disabled={false}
                    />
                    <span>Afternoon</span>
                </p>
                <p>
                    <Checkbox 
                        disabled={false}
                    />
                    <span>Evening</span>
                </p>
                <p>
                    <Checkbox 
                        disabled={false}
                    />
                    <span>Night</span>
                </p>
            </div>
        </div>
    );
}
 
export default flightFilter;