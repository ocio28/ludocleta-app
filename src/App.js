import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Games from './screens/Games'



export default () => (
  <Router>
    <div>
      <Route exact strict path="/" component={Games} />
      <Route exact path="/home" component={Games}/>
      <Route component={Footer}/>
    </div>
  </Router>
) 
