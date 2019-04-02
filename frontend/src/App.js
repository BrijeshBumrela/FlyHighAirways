import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import FlightSearch from './containers/FlightSearch/FlightSearch';

import 'antd/dist/antd.css';

import reducer from './store/reducer';

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact render={() => <h1>Home</h1>} />
                        <Route path="/flights" component={FlightSearch} />
                        <Route path="/book-flight" render={() => <h1>Book Flight Page</h1>}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
