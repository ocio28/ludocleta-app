import React, { Component } from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';


export default class Footer extends Component {
  
  render() {
    const click = (url) => {
      const win = window.open(url, '_blank');
      win.focus();
    }

    return (
      <footer>
        <Container textAlign="center">
          <strong>juegos 28 - {new Date().getFullYear()}</strong>
          <div id="tippin-button" data-dest="ocio28"></div>
        </Container>
      </footer>
    );
  }
}
