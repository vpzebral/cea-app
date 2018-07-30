import React, { Component } from 'react';
import './content.css';
import CardVitrine from '../CardVitrine/CardVitrine';
import MediaQuery from 'react-responsive';
import VitrineMobile from '../VitrineMobile/VitrineMobile';

const Desktop = props => <MediaQuery {...props} minWidth={1025} />;
const Mobile = props => <MediaQuery {...props} maxWidth={1024} />;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  Header = () =>{
    return(
      <div className="header-vitrine">
          <label className="header-title">{this.state.data.title}</label>
      </div>
    );
  }

  Cards = () =>{
    const cards = this.state.data.cards.map((item, index) =>
      <CardVitrine key={index} id={item.id} 
        imageLink={item.imageLink}
        title={item.title} commandLink={item.commandLink} price={item.price}/>
    )

    return cards;
  }

  Vitrine = () =>{ 
    return(
      <div className="grid-vitrine">
          {this.Cards()}
      </div>
    );
  }
  
  render() {       
    return(
        <section className="content">
          {this.Header()}
          <Desktop>{this.Vitrine()}</Desktop>
          <Mobile><VitrineMobile cards={this.Cards()}/></Mobile>
        </section>
      )
    }
}
export default Content;