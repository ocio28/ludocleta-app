import React, { Component } from 'react';
import logo from '../../logo.svg'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="logos">
          <div className="FooterBlock">
            <a href="https://t.me/ocio28" target="blank" className="btn btn-link CleanLink">
              <i className="fab fa-telegram fa-2x"></i>
              <strong>@ocio28</strong>
            </a>
            <a href="https://twitter.com/ocio28" target="blank" className="btn btn-link CleanLink">
              <i className="fab fa-twitter fa-2x"></i>
              <strong>@ocio28</strong>
            </a>
            <a href="https://github.com/ocio28/c28-app" target="blank" className="btn btn-link CleanLink">
              <i className="fab fa-github fa-2x"></i>
              <strong>c28-app</strong>
            </a>
          </div>
          <div className="FooterBlock">
            <img src={logo} alt="Ludocleta" width={40} height={40}/>
            <strong>c28 - {new Date().getFullYear()}</strong>
          </div>
        </div>
      </footer>
    );
  }
}
