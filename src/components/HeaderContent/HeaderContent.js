import React, { Component } from 'react';
import './header-content.css';
import HeroCarousel from '../HeroCarousel/HeroCarousel';

class HeaderContent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {       
    return(
        
        <section className="header-content">
            <HeroCarousel banners={this.props.data.banners}/>
        </section>
      )
    }
}
export default HeaderContent;