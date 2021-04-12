import React, { Component } from 'react';
import { Button, Icon, Item, Label } from 'semantic-ui-react';

import { format_fecha, open_tab } from "../../utils";


export default ({ html5, title, tags, url, thumbnail, fecha_publicacion, descripcion, externo }) => {
  const play = () => open_tab(html5)

  return (
    <Item>
      <Item.Image src={thumbnail} />
      <Item.Content>
        <Item.Header as='a' onClick={play}>{title}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{format_fecha(fecha_publicacion)}</span>
        </Item.Meta>
        <Item.Description>
          <p style={{width: '50%'}}>{descripcion}</p>
          {url.length > 0 && <div>
            <p>Descargar</p>
            <Button.Group>
              {url.map((v, i) => <Descargar key={i} { ...v } />)}
            </Button.Group>
          </div>}
        </Item.Description>
        <Item.Extra>
          {tags.map(v => <Label key={v}>{v}</Label>)}
          <Button primary floated='right' onClick={play}>
            Jugar
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
        {externo && <Item.Extra>
          {externo.descripcion} <a href={externo.url} target="blank">{externo.url}</a>
        </Item.Extra>}
      </Item.Content>
    </Item>
  )
}

const Descargar = ({ icon, type }) => {
  if (type === 'OR') {
    return <Button.Or />
  }
  return (
    <Button icon>
      <Icon name={icon} />
    </Button>
  )
}
/*
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
            <img src={game.thumbnail} alt={game.title} className="img-fluid"/>
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
)*/
