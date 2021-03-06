import React, { Component } from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';


export default class Footer extends Component {
  
  render() {
    const click = (url) => {
      const win = window.open(url, '_blank');
      win.focus();
    }

    return (
      <footer style={{ padding: 16, marginTop: 64 }}>
        <Container textAlign="center">
          <strong>C28 - {new Date().getFullYear()}</strong>
        </Container>
      </footer>
    );
  }
}
