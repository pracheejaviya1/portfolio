// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import DesktopWindowsRoundedIcon from "@material-ui/icons/DesktopWindowsRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import React from "react";
import Carousel from "./EduServCarousel";



const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Programmes</h2>
          <h5 className={classes.description}>
           The entire design prototype was made in Figma. There were 39 screen in total with 16 different features. This project was a part of Human Computer Interaction Course in Semester 6. 
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Personas"
              description="We made 4 different personas for the project and did market research of various e-learning platforms"
              icon={PeopleAltRoundedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Diet"
              description="25 different use-case scenarios were made for this project."
              icon={BookmarksRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Pen"
              description="Icon pack used was hero-icons"
              icon={BorderColorRoundedIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
        <Carousel/>
      </div>
    </div>
  );
}
