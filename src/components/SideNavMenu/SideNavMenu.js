import React, { Component } from 'react';
import './side-nav-menu.css';
import properties from './propsDefault.json';

class SideNavMenu extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = properties;

  Items = () =>{
    const list = this.props.items.map((item, index) =>
      <div key={index} id={item.id} className="menu-item">
          <h4 className="title">{item.title}</h4>
      </div>
    );
    return list;
  }
  
  render() {       
    return(
        <div className="side-nav-menu">
            <div className="side-nav-menu-header">
              <label>{this.props.title}</label>              
            </div>
            {this.Items()}
        </div>
      )
    }
}
export default SideNavMenu;