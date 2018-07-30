import React, { Component } from 'react';
import './card-vitrine.css';
import properties from './propsDefault.json';
import CommandLink from '../CommandLink/CommandLink';
class CardVitrine extends Component {
    constructor(props) {
        super(props);        
    }

    static defaultProps = properties;
   
    
    render() {
      var style = {zIndex: 1}             
      return (
        <div className="card-vitrine has-border-on-hover" id={this.props.id}>
            <img className="image-link" alt={"image-link-"+this.props.id} src={this.props.imageLink}/>
            <h4 className="card-vitrine-title">{this.props.title}</h4>
            <p className="card-vitrine-price-before">De: {this.props.price.before}</p>
            <p className="card-vitrine-price-after">Por: {this.props.price.after}</p>
            <CommandLink style={style} label={this.props.commandLink.label} href={this.props.commandLink.href}/>
        </div>
      )
    }
}
export default CardVitrine;