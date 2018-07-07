import React, { Component } from 'react';
import logo from '../../logo.svg'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="logos">
          <div className="FooterBlock">
            <a href="https://twitter.com/lokaljost" target="blank" className="btn btn-link CleanLink">
              <i className="fab fa-twitter fa-2x"></i>
              <strong>@lokaljost</strong>
            </a>
          </div>
          <div className="FooterBlock">
            <img src={logo} alt="Ludocleta" width={40} height={40}/>
            Ludocleta - 2018
          </div>
        </div>
      </footer>
    );
  }
}
