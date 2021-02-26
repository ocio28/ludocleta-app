import React, { Component } from 'react';
import { Button, Container, Header, Icon, Image, Item } from 'semantic-ui-react';
import moment from "moment";

import Cartridge from '../components/game/Cartridge'
import Loading from '../components/Loading'
import * as Api from '../lib/Api'
import { open_tab } from '../utils';


function mail_to(v) {
  window.location.href = "mailto:" + v
}

export default class Games extends Component {
  state = {
    loading: true,
    games: []
  }

  componentDidMount() {
    Api.games().then(data => {
      this.setState({games: [...data], loading: false})
    }).catch(e => {
      console.log(e)
      this.setState({loading: false})
    })
  }

  render() {
    return (
      <div>
        <div style={bannerStyle}>
          <div style={{ padding: 8, display: 'flex', width: '100%', justifyContent: 'space-between'}}>
            <div id="tippin-button" data-dest="ocio28"></div>
            <div>
              <Button icon color="blue" circular onClick={() => open_tab("https://twitter.com/ocio28")}>
                <Icon name="twitter" />
              </Button>
              <Button icon color="red" circular as="a" onClick={() => mail_to("develop@c28.cl")}>
                <Icon name="mail" />
            
              </Button>
            </div>
          </div>
          <div>
            <img src="img/logo_simple.png" />
            <h3>Videojuegos C28</h3>
            <h4>Todo muy experimental</h4>
          </div>
        </div>
        <Container>
          {this.state.loading && <Loading />} 
          <Item.Group>
            {this.state.games.sort(sortGames).map((game, i) => (
                <Cartridge key={i} { ...game } />
              ))
            }
          </Item.Group>
        </Container>
      </div>
    )
  }
}

function sortGames(a, b) {
  return moment(a.fecha_publicacion).isBefore(b.fecha) ? -1 : 1
}

const bannerStyle = {
  marginBottom: 16,

  //backgroundImage: 'url(img/banner.png)',
  //backgroundAttachment: 'fixed',
  //backgroundRepeat: 'no-repeat',
  //backgroundSize: 'length',
  backgroundColor: '#5599ff',
  textAlign: 'center',
  minHeight: 320,
  width: '100%',
  color: 'white'
}