import React, { Component } from 'react';
import './button.css';
import properties from './propsDefault.json';
class Button extends Component {
    constructor(props) {
        super(props);        
    }

    static defaultProps = properties;
   
    
    render() {             
      return (
        <button id={this.props.id}
                name={this.props.name}
                className="button">
                {this.props.value}
        </button>
      )
    }
}
export default Button;