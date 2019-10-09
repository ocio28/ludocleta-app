import React, { Component } from 'react';


export default class Cartridge extends Component {
  play = () => {
    console.log(this.props.game)
    let win = window.open(this.props.game.html5, '_blank');
    win.focus();
  }

  render() {
    let game = this.props.game
    return (
      <li className="list-group-item cs-li">
        <div className="row">
          <div className="col-12 col-md-3 align-self-center">
            <img src={"img/" + game.name + "/mini.png"} alt={game.title} className="img-fluid"/>
          </div>
          <div className="col-12 col-md-9 d-flex flex-column justify-content-between">
            <div>
              <h4 className="mt-1">{game.title}</h4>
              <div>{game.icons.map((l, i) => <Tag key={i} text={l} />)}</div>
            </div>
            <div>
              <div className="p-1">
                {game.url.map((u, i) => (
                  <a key={i} className="btn btn-link text-danger" href={u.link}>
                    <i className={u.icon + " fa-2x mr-3"}></i> {u.label}
                  </a>
                ))}
              </div>
              <button type="button" className="btn btn-outline-danger btn-block text-white"
                onClick={this.play}>Jugar</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const Tag = ({text}) => (
  <small className="text-muted p-2">
    {text}
  </small>
)
