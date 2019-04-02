import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import FlightSearch from './containers/FlightSearch/FlightSearch';

import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={() => <h1>Home</h1>} />
                    <Route path="/flights" component={FlightSearch} />
                    <Route path="/book-flight" render={() => <h1>Book Flight Page</h1>}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
