import React, { Component } from 'react';
import Cartridge from '../components/game/Cartridge'
import Loading from '../components/Loading'
import * as Api from '../lib/Api'
import logo from "../logo.svg";

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
        <section className="text-center">
          <img src={logo} className="img-fluid" alt="logo"/>
        </section>
        <ul className="list-group list-group-flush">
        {this.state.loading ? <Loading /> :
            this.state.games.sort(sortGames).map((game, i) => (
              <Cartridge key={i} game={game} onClick={this.onClick}/>
            ))
          }
          </ul>
      </div>
    )
  }
}

function sortGames(a, b) {
  return b.index - a.index
}
