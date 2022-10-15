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
    <div>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            {/* <h3>About Me</h3> */}
            <h4>
            I'm pursuing a Master's degree in Human Centered Computing at University of Maryland, Baltimore County 
            I did my undergrad in computer science and I have full-stack development experience. 
            I want to pursue my career in designing assistive technology tools and combine it with the Human Computer interaction 
            facet to improve accessibility and overall user experience. 
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
