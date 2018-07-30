import React, { Component } from 'react';
import './menu.css';
import MediaQuery from 'react-responsive';
import CommandLink from '../CommandLink/CommandLink';

const Desktop = props => <MediaQuery {...props} minWidth={1025} />;
const Mobile = props => <MediaQuery {...props} maxWidth={1024} />;
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {         
          menuItens: this.props.menuItens,
          login: this.props.login,
          toteBag : this.props.toteBag,
          iconsMenu : this.props.iconsMenu
        };
    };    

    MenuItens = () => {        
        const menuItens = this.state.menuItens.map((item, index) =>
          <li key={index} id={item.id}><a href={item.href}>{item.title}</a></li>
        );        
        return(
          <div className="menu">
            <ul>
              {menuItens}
            </ul>
          </div>
        )
    };



    MenuMobile = () =>{
      var style = {
        transform: 'translateX(0)'        
      }
      return(
        <div className="menu-mobile" style={this.props.showMenu? style : null}>
          {this.MenuMobileLogin()}
          {this.MenuItensMobile()}
          {this.MenuMobileLinks()}
          {this.MenuMobileToteBag()}
        </div>
      )
    };

    MenuItensMobile = () =>{

      const menuItensMobile = this.state.menuItens.map((item, index) =>
          <li key={index} id={item.id}>
            <a href={item.href}>{item.title}</a>
            <img alt="icon-menu" src={this.state.iconsMenu.iconAfter}/>
          </li>
      );
      return(
        <ul>
          {menuItensMobile}
          
        </ul>
      )
    }

    MenuMobileLinks = () =>{

      const links = this.state.toteBag.links.map((item, index ) =>
        <CommandLink key={index} id={item.id} label={item.label} href={item.href}/>
      )

      return(
          <div className="menu-mobile-links">
            {links}
          </div>
      )
    }

    MenuMobileToteBag = () =>{
      return(
          <div className="menu-mobile-tote-bag">
              <img alt="icon-tote-bag" className="icon-tote-bag" src={this.state.toteBag.bagIcon}/>
              <CommandLink id={this.state.toteBag.link.id} label={this.state.toteBag.link.label} href={this.state.toteBag.link.href}/>
          </div>
      )
    }

    MenuMobileLogin = () => {     
     
      const links = this.state.login.links.map((item, index ) =>
        <CommandLink key={index} id={item.id} label={item.label} href={item.href}/>
      )
      return(        
          <div className="box-login-mobile">
              <div>
                <p style={{'padding': '5px 0'}}>{this.state.login.text1}</p>
                <p>{this.state.login.text2} {links[0]} {this.state.login.text3} {links[1]}</p>
              </div>
              <div className="box-close">
                <a onClick={ () => this.props.click()}><img alt="icon-close-menu" className="icon-close-menu" src={this.state.iconsMenu.iconClose}/></a>
              </div>
          </div>
      )
    }
    
    render() {
           
      return (
        <div>
            <Desktop>{ this.MenuItens() }</Desktop>
            <Mobile>{ this.MenuMobile() } </Mobile>
            {this.props.showMenu? <span className="screen"></span>: null}
        </div>
      )
    }
}
export default Menu;