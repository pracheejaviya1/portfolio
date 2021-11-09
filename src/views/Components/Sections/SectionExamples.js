// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import profile from "assets/img/pracheeeeee.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";



const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">

          <GridItem xs={12} sm={12} md={6}>
            <Link to="profile-page" className={classes.link}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgSize
                }
              />
              
            </Link>
          </GridItem>
          <Button color="primary" size="lg" simple>
                John Doe
              </Button>
        </GridContainer>
      </div>
    </div>
  );
}
