import React, { Component } from 'react';
import './footer-content.css';
import Slider from "react-slick";
import CardVitrine from '../CardVitrine/CardVitrine';
import MediaQuery from 'react-responsive';


const Desktop = props => <MediaQuery {...props} minWidth={1025} />;
const Mobile = props => <MediaQuery {...props} maxWidth={767} />;
const Tablet = props => <MediaQuery {...props} minWidth={768} maxWidth={1024} />;
class FooterContent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: this.props.data     
    }
  }

  Header = () =>{
    return(
      <div className="header-produtos-vistos">
          <label className="header-title">{this.state.data.title}</label>
      </div>
    )
  }

  Cards = () =>{
    const cards = this.state.data.cards.map((item, index) =>
      <div key={index}>
        <CardVitrine id={item.id} 
          imageLink={item.imageLink}
          title={item.title} commandLink={item.commandLink} price={item.price}/>
      </div>
    )

    return cards;
  }

  slidesToShow = () =>{
    var show = 4;
    <div><Desktop>{show = 4}</Desktop><Mobile>{show = 1}</Mobile></div>
    console.log("show", show);
    return show;
  }
  
  render() {
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
      };
      const settingsMobile = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
      };
      const settingsTablet = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
      };

      return(
        <section className="footer-content">
            {this.Header()}
            <div className="container">
              <Desktop>
                <Slider {...settings}>
                  { this.Cards() }
                </Slider>
              </Desktop>
              <Mobile>
                <Slider {...settingsMobile}>
                  { this.Cards() }
                </Slider>
              </Mobile>
              <Tablet>
              <Slider {...settingsTablet}>
                  { this.Cards() }
                </Slider>
              </Tablet>
            </div>
        </section>
      )
    }
}
export default FooterContent;