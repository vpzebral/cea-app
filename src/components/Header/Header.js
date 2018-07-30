import React, { Component } from 'react';
import './header.css';
import Menu from '../Menu/Menu';
import CommandLink from '../CommandLink/CommandLink';
import InputText from '../InputText/InputText';
import Button from '../Button/Button';
import MediaQuery from 'react-responsive';


const Desktop = props => <MediaQuery {...props} minWidth={1025} />;
const Mobile = props => <MediaQuery {...props} maxWidth={1024} />;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: this.props.data,
      searchValue: '',
      showMenu: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {     
    this.setState({searchValue: event.target.value});
  };

  BoxHeader = () => {
    return(
      <div className="box-header">
          { this.BoxLogo() }
          { this.BoxLogin() }
          { this.BoxToteBag() }
      </div>
    )
  };

  BoxLogo = () => {
    return(
      <div className="box-logo">
        <a id="logo-link" href={this.state.data.home}>
          <img id="logo" alt="logo" src={this.state.data.logo} title={this.state.data.title}/>
        </a>
      </div>
    )
  };

  BoxLogin = () =>{
    const links = this.state.data.login.links.map((item, index ) =>
      <CommandLink key={index} id={item.id} label={item.label} href={item.href}/>
    )
    return(
      <div className="box-login">
          <div>
            <p style={{'padding': '5px 0'}}>{this.state.data.login.text1}</p>
            <p>{this.state.data.login.text2} {links[0]} {this.state.data.login.text3} {links[1]}</p>
          </div>
          <div className="box-search">
            <form className="form">
              <InputText placeholder={this.state.data.search.placeholder} value={this.state.searchValue} onChange={this.handleChange}/>
            </form>
            <Button value={this.state.data.search.button.value}/>
          </div>
      </div>
    )
  };

  BoxToteBag = () =>{

    const links = this.state.data.toteBag.links.map((item, index ) =>
      <CommandLink key={index} id={item.id} label={item.label} href={item.href}/>
    )

    return(
      <div className="box-tote-bag-links">
          <div className="box-tote-bag">
              <img alt="icon-tote-bag" className="icon-tote-bag" src={this.state.data.toteBag.bagIcon}/>
              <CommandLink id={this.state.data.toteBag.link.id} label={this.state.data.toteBag.link.label} href={this.state.data.toteBag.link.href}/>
              <p className="qtda-itens">{this.state.data.toteBag.qtdaItens} Itens | </p>
              <p className="price-total">{this.state.data.toteBag.priceTotal}</p>
          </div>
          <div className="box-links">
              {links}
          </div>
      </div>
    )

  }

  OnClickMenuMobile = () =>{
    this.setState({
      showMenu: !this.state.showMenu
    });    
  }


  BoxMobile = () =>{
    return(
      <div className="box-mobile-header">
          <a onClick={() => this.OnClickMenuMobile()}>
            <img alt="icon-menu-mobile" className="icon-menu-mobile" src={this.state.data.iconMenuMobile}/>
          </a>
          <a className="link-logo-mobile" href={this.state.data.home}>
            <img alt="icon-logo-mobile" className="icon-logo-mobile" src={this.state.data.iconLogoMobile}/>
          </a>
          <a className="link-search-mobile" href={this.state.data.home}>
            <img alt="icon-search-mobile" className="icon-search-mobile" src={this.state.data.iconSearchMobile}/>
          </a>
      </div>
    )
  }

  render() {     
    return(
      <header className="header">
        <Desktop>
          { this.BoxHeader() }            
        </Desktop>
        <Mobile>
          { this.BoxMobile() }
        </Mobile>
        <Menu toteBag={this.state.data.toteBag}
              login={this.state.data.login} 
              menuItens={this.state.data.menuItens} 
              showMenu={this.state.showMenu} 
              click={ () => this.OnClickMenuMobile() }
              iconsMenu={this.state.data.iconsMenu}/>
      </header>
    )
  };
}
export default Header;