import React, { Component } from 'react';
import './app.css';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import HeaderContent from './components/HeaderContent/HeaderContent';
import SideNav from './components/SideNav/SideNav';
import Content from './components/Content/Content';
import FooterContent from './components/FooterContent/FooterContent';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {}
    };    
  }

  componentDidMount() {
    fetch("http://www.mocky.io/v2/5b5e6f662e00003400694500")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },            
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };


  render() {       
      if (!this.state.isLoaded) {
        return <Loading/>
      } else { 
        return (
          <section className="app grid-template">                   
            <Header data={this.state.data.header}/>
            <HeaderContent data={this.state.data.headerContent}/>
            <SideNav data={this.state.data.sideNav}/>
            <Content data={this.state.data.content}/>
            <FooterContent data={this.state.data.footerContent}/>
            <Footer/>
          </section>
      );
    };
  };
};

export default App;
