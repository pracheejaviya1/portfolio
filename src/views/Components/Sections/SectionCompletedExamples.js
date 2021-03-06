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
              I am a Final Year BTech student at Ahmedabad University, India. I
              am also pursuing Minors in Physics as Cosmos
              and Astronomy fascinates me. 
              I have good experience in designing, coding website frontend and developing Android
              mobile applications.  I am also passionate about basketball.{" "}
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
