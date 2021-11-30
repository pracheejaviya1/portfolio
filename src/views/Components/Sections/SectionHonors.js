import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionHonors() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h2>Positions of Responsiblity</h2>
            <h4>
              Teaching Assistant for Human Computer Interaction course in the
              final semester
              <br />I was the Secretary and Treasurer for University's Annual
              Techfest, Ingenium for two consecutive years.
              <br />
              Peer tutor for Communication in English Course
            </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h2 justify="center">Skills and Interests </h2>
            <h4>
              Python, Java, C, C++, PostgreSQL, Kotlin, HTML, CSS, JAVASCRIPT,
              GatsbyJS, ReactJS, TailwindCSS
            </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h2 justify="center">Achievements </h2>
            <h4>
              National Level Basketball U-17
              <br />
              State level basketball U-16, U-17, U-19 opens <br />
              Speed Cubing 3x3 WCA DAIICT, Gandhinagar <br />
              Team project on Autonomous car was selected for Annual Tech Expo
              at the University
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
