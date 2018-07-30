import React, { Component } from 'react';
import './vitrine-mobile.css';
import Slider from "react-slick";
import MediaQuery from 'react-responsive';

const Tablet = props => <MediaQuery {...props} minWidth={768} />;
const Mobile = props => <MediaQuery {...props} maxWidth={767} />;

class VitrineMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards
    }
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
        <div className="vitrine-mobile">
          <Tablet>
            <Slider {...settingsTablet}>
                {this.state.cards}
            </Slider>
          </Tablet>
          <Mobile>
              <Slider {...settings}>
                {this.state.cards}
            </Slider>
          </Mobile>
        </div>
      )
    }
}
export default VitrineMobile;