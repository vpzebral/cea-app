import React, { Component } from 'react';
import './input-text.css';
import properties from './propsDefault.json';
class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputFocus:false,
          isValue:false        
      }
    }

    static defaultProps = properties;

    onFocus = () => {
      this.setState({
          inputFocus : true
      })
    }

    onBlur = () =>{
        this.setState({
            inputFocus : false,
            isValue : this.props.value? true : false
        })
    }
    
    render() {
      return (
        <div className="input-text-container">
          <label className="input-text-label" htmlFor={this.props.name} style={this.state.inputFocus || this.state.isValue? {"top": "0", "opacity":"1", "color":"var(--theme-color-primary)"}: null}>{this.props.placeholder}</label>
          <input onChange={this.props.onChange} 
                 onFocus={ () => this.onFocus()} 
                 onBlur={ () => this.onBlur()} 
                 id={this.props.id} 
                 name={this.props.name} 
                 type="text" 
                 className="input-text"
                 placeholder={this.props.placeholder}/>
        </div>
      )
    }
}
export default InputText;