// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import BubbleChartRoundedIcon from "@material-ui/icons/BubbleChartRounded";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import React from "react";
import Carousel from "./LSTMCarousel";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Details</h2>
          <h5 className={classes.description}>
            This project was done in a team of three, in semester 5. Our
            objective was to implement a memory based model for better Spectrum
            Sensing in Cognitive Radio using LSTM To produce figures for -
            Comparison of Probability of detection vs SNR for OR, AND and
            Majority based fusion decision for Number of Secondary users = 5 and
            50. Comparison of Probability of detection vs SNR for various values
            of k (1,2,5,10) for OR based fusion decision. The codebase can be
            accessed{" "}
            <a href="https://colab.research.google.com/drive/17inBVztqwdyDstynqEDpqDKlz7BR8Hix?usp=sharing">
              here.
            </a>
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tools used"
              description="Python, LaTeX,  Colab,  Matplotlib, Numpy, Pandas,  Wolfram world"
              icon={BookmarksRoundedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Inference"
              description="The development methodologies considered for this project is Extreme Kanban which is a combination of Kanban and Extreme Programming."
              icon={BubbleChartRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tools"
              description="Icon pack used was hero-icons. We used figma to develop the designs."
              icon={BorderColorRoundedIcon}
              iconColor="danger"
              vertical
            />
          </GridItem> */}
        </GridContainer>
        <Carousel />
      </div>
    </div>
  );
}
