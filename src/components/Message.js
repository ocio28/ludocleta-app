import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    if (this.props.message === '') {
      return <div></div>
    }
    return (
      <div className={'InfoMessage' + (this.props.error ? ' ErrorMessage' : '')}>
        <label className="MessageLabel">{this.props.error ? "Error: " : ""}{this.props.message}</label>
        <button className="MessageClose" onClick={this.props.onClick}>x</button>
      </div>
    );
  }
}
