import React, { Component } from 'react';
import './side-nav.css';
import SideNavMenu from '../SideNavMenu/SideNavMenu';
import MediaQuery from 'react-responsive';
const Desktop = props => <MediaQuery {...props} minWidth={1025} />;
const Mobile = props => <MediaQuery {...props} maxWidth={767} />;
const Tablet = props => <MediaQuery {...props} minWidth={768} maxWidth={1024} />;
class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  SideNavMenus = () =>{    
    const sideNavMenus = this.state.data.menus.map((item, index) =>
      <SideNavMenu key={index} title={item.title} items={item.items}/>
    )    
    return sideNavMenus
  }

  Banners = () =>{
    
    const banners = this.state.data.banners.map((item, index) =>
      <div key={index} id={item.id} className="side-banner">
          <img alt="img-banner" className="img-banner" src={item.image}/>
      </div>
  )

    return banners;
  }
  
  render() {       
    return(
      <Desktop>
          <section className="side-nav">
              <div className="container">                
                  {this.SideNavMenus()}
                  {this.Banners()}              
              </div>
          </section>
        </Desktop>
      )
    }
}
export default SideNav;