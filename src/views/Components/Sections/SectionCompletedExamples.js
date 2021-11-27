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
            <h4>//add about yourself here</h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
