import React, { Component } from 'react';
import './Cartridge.css';

export default class Cartridge extends Component {
  play = () => {
    console.log(this.props.game)
    let win = window.open(this.props.game.html5, '_blank');
    win.focus();
  }

  render() {
    let game = this.props.game
    return (
      <div className="col-md-4 Cartridge">
        <div className="mb-4">
          <h2>{game.title}</h2>
          <img src={"img/" + game.name + "/mini.png"} alt={game.title} className="card-img-top CartridgeThumb"/>
          <div className="card-body">
            <p className="card-text">{game.icons.map((l, i) => <Tag key={i} text={l}/>)}</p>
            <div className="d-flex justify-content-between align-items-center">
              {game.url.length === 0 ?
                <button type="button" className="btn btn-primary btn-lg btn-block"
                  onClick={this.play}>Jugar</button>
              :
                <div className="btn-group btn-block">
                  <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.play}>Jugar</button>
                  <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    {game.url.map((u, i) => (
                      <a key={i} className="dropdown-item d-flex align-items-center" href={u.link}>
                        <i className={u.icon + " fa-2x mr-3"}></i> Descarga para {u.label}
                      </a>
                    ))}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Tag = ({text}) => (
  <label className="Tag">
    {text}
  </label>
)
