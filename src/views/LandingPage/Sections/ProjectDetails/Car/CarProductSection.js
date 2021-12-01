// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import ControlCameraRoundedIcon from "@material-ui/icons/ControlCameraRounded";
import DirectionsCarRoundedIcon from "@material-ui/icons/DirectionsCarRounded";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import React from "react";
import Carousel from "./CarCarousel";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Details</h2>
          <h5 className={classes.description}>
            We made a miniature autonomous car(differential drive) for the
            Mobile Robots course in semester 7. We have used openCV and color
            masking techniques for lane detection. Find the code 
            <a href="https://github.com/Kaushal1011/miniature-autonomous-car">
                          {" "}here.
            </a>
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Components used"
              description="Raspberry Pi, Camera Module, Motor Driver, IR sensors, Ultrasonic Sensors, wheel encoders, Differential Drive chassis, Arduino UNO"
              icon={DirectionsCarRoundedIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Controls"
              description="The heading angle was calculated against the lanes detected with the camera module. Accordingly, the torques of each wheel was calculated."
              icon={ControlCameraRoundedIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
        <Carousel />
      </div>
    </div>
  );
}
