import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Games from './screens/Games'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Switch>
              <Redirect exact strict from="/" to="/home" />
              <Route exact path="/home" component={Games}/>
            </Switch>
          </div>
          <div className="container">
            <Route path="/home" component={Footer}/>
          </div>
        </div>
      </Router>
    );
  }
}
