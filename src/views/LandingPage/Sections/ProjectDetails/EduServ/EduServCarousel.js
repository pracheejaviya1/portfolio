import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/eduserv1.png";
import image2 from "assets/img/eduserv2.png";
import image3 from "assets/img/eduserv3.png";
import image4 from "assets/img/eduserv4.png";
import image5 from "assets/img/eduserv5.png";
import image6 from "assets/img/eduserv6.png";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h4 className={classes.subtitle}>Few Screen Designs</h4>

        <GridContainer>
          <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img
                    src={image4}
                    alt="Fourth slide"
                    className="slick-image"
                  />
                </div>{" "}
                <div>
                  <img src={image5} alt="Fifth slide" className="slick-image" />
                </div>{" "}
                <div>
                  <img src={image6} alt="Sixth slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
