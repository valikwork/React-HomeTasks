import React from "react";
import Slider from "react-slick";
import { Container, Dimmer, Loader, Image, Item } from 'semantic-ui-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
export default class SlickSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    
    return (
      <Slider {...settings}>
          {this.props.photos.map(photo => {
            return  <Container key={photo.id}><Image src={photo.url} alt={photo.title} size='small' wrapped/><Item>{photo.title}</Item></Container>
          })}
      </Slider>
    );
  }
}