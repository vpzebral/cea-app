import React, { Component } from 'react';
import './command-link.css';

class CommandLink extends Component {
    constructor(props) {
        super(props);
    } 
    
    render() {      
      return (
        <a style={this.props.style} id={this.props.id} className="command-link" href={this.props.href}>{this.props.label}</a>
      )
    }
}
export default CommandLink;