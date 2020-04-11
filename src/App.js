import React, { Component } from 'react';

/*Router*/

import {Route, Switch} from "react-router-dom";


import AppNavBar from './components/Layout/AppNavBar'
import Dashboard from './components/Layout/Dashboard'


import './App.css'


class App extends Component {
  render() {
    return (
                <div className="App">
                    <AppNavBar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                        </Switch>
                    </div>
                </div>
    );
  }
}

export default App;
