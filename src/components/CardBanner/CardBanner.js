import React, { Component } from 'react';
import './card-banner.css';
import properties from './propsDefault.json';
class CardBanner extends Component {
    constructor(props) {
        super(props);        
    }

    static defaultProps = properties;
   
    
    render() {             
      return (
        <div className="card-banner" id={this.props.id}>
          <img src={this.props.image} alt={"image-card-"+this.props.id}/>
        </div>
      )
    }
}
export default CardBanner;