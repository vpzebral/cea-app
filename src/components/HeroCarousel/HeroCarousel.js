import React, { Component } from 'react';
import './hero-carousel.css';
import Slider from "react-slick";
import CardBanner from '../CardBanner/CardBanner';
class HeroCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: this.props.banners
    }
  }

  Banners = () =>{
    const itens = this.state.banners.map((item, index) =>
      <div key={index}>
          <div className="img-banner">
            <img alt={"img-banner-"+item.id} src={item.url}/>
          </div>
          <div className="grid-cards-flex">
            { item.cards? this.Cards(item) : null }
          </div>
      </div>
    );

    return itens;
  }

  Cards = (banner) =>{
    const cards = banner.cards.map((item, index) =>
        <CardBanner key={index} id={item.id} image={item.url}/>
    );
    return cards;
  }
  
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false
    };

    

    return(
        <div className="hero-carousel">
            <Slider {...settings}>
                { this.Banners() }
            </Slider>
        </div>
      )
    }
}
export default HeroCarousel;