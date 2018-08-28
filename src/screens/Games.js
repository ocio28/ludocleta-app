import React, { Component } from 'react';
import Cartridge from '../components/game/Cartridge'
import Loading from '../components/Loading'
import logo from '../logo.svg'
import * as Api from '../lib/Api'

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

  onClick = (id) => {
    this.props.history.push('/game/' + id)
  }

  render() {
    return (
      <div>
        <section className="text-center AppTitle">
          <div className="container">
            <img src={logo} width="200" height="200" alt="logo"/>
          </div>
        </section>
        {this.state.loading ? <Loading /> :
          <div className="row">
            {this.state.games.sort(sortGames).map((game, i) => (
              <Cartridge key={i} game={game} onClick={this.onClick}/>
            ))}
          </div>
        }
      </div>
    )
  }
}

function sortGames(a, b) {
  return b.index - a.index
}
