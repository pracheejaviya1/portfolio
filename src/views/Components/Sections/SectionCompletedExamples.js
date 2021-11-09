// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";


const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3>About Us</h3>
            <h4>
              We at Dyne Health and Fitness are a budding startup from BITS
              Pilani whose sole aim is to take fitness, the fit lifestyle and
              health living to the general public without them having to break
              their bank accounts. We don't think a fit lifestyle should be
              limited to people from the cities, we want everyone to be fit, and
              in the process make fitness a necessity rather than a luxury.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
