import React, { Component } from 'react';
import './loading.css';
import properties from './propsDefault.json';
class Loading extends Component {
    constructor(props) {
        super(props);        
    }

    static defaultProps = properties;
   
    
    render() {             
      return (
        <div className="loading-app">
          <img alt="loading-gif" className="loading-gif" src={this.props.gif}/>
          <label>{this.props.text}</label>
        </div>

      )
    }
}
export default Loading;