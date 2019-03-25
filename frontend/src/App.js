import React, { Component } from 'react';

import FlightSearch from './containers/FlightSearch/FlightSearch';

import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return (
            <div>
                <FlightSearch />
            </div>
        );
    }
}

export default App;
