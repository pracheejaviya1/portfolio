// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import BarChartRoundedIcon from "@material-ui/icons/BarChartRounded";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import React from "react";
import Carousel from "./StockCarousel.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Details</h2>
          <h5 className={classes.description}>
            This project studied and tested fundamental and technical features
            to create a model that can classify/- cluster stock tickers as BUY
            SELL or HOLD signals. Using algorithms such as Logistic Regression,
            Linear Regression, Knearest Neighbor, Decision Trees to create an
            accurate classifier/clustering model and use Bagging and Boosting
            techniques to achieve better performance. After the project I
            realised there are better methods (neural networks, deep learning)
            to achieve higher accuracy. However, the end goal of this project
            was getting a "hands-on" on the subject machine learning .
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Steps"
              description="Used US Stock fundamental datasets of past 15 years for training. Data cleaning and preprossesing, data labelling(0,1,2), Algorithm testing, Inference "
              icon={BarChartRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Conclusion"
              description="Deciding a stock’s worth based on Quarterly Reports is not a new achievement. For most Fundamental Analysts, the strategy we utilized may be considered too simple since it
                            works successfully 50% of the time. But for the purposes of
                            learning machine learning classification, it was enough. We
                            could potentially add more features to improve the model or
                            alter the features we have based on new strategies. Ripping
                            the decision trees and building algorithms from scratch
                            increased the accuracy. Killing nodes that lead to overfitting
                            also increased the accuracy by 0.2. We saw that out of all
                            the algorithms, Random Forest Classifier and XGBoosting
                            worked the best, giving 50% accuracy."
              icon={ShowChartRoundedIcon}
              iconColor="info"
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
