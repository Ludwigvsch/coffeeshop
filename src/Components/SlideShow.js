
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import React, { Component } from "react";
import Fade from "react-reveal";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/portfolio/01.jpg" },
  { url: "images/portfolio/02.jpg" },
  { url: "images/portfolio/03.jpg" },
  { url: "images/portfolio/04.jpg" },
];






class ShowSlideshow extends React.Component {
    render() {
        //take Sldieshow with sufficient padding around it
        return (
                <div>
                  <SimpleImageSlider
                    width= {window.innerWidth}
                    height={window.innerHeight/2}
                    images={images}
                    showBullets={true}
              showNavs={true}

              
                  />
                </div>
              );
            }
    
      
       
}
export default ShowSlideshow;