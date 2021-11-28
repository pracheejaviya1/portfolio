import Grid from "@material-ui/core/Grid";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionExamples from "./Sections/SectionExamples.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax image={require("assets/img/plane.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.subtitle}>Hello!</h1>
                <h1 className={classes.title}>I'm Prachee Javiya.</h1>
                <SectionCompletedExamples />
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid
          className={classes.trainerHeading}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <h3>Check out my Projects!</h3>
          <GridContainer justify="center" container spacing={12}>
            <GridItem xs={6} sm={2}>
              <SectionExamples project="EduServ" />
            </GridItem>
            <GridItem xs={6} sm={2} className={classes.marginLeft}>
              <SectionExamples project="EveRecon" />
            </GridItem>
            <GridItem xs={6} sm={2} className={classes.marginLeft}>
              <SectionExamples project="Autonomous Car" />
            </GridItem>
            <GridItem xs={6} sm={2}>
              <SectionExamples project="Smart Car System" />
            </GridItem>
            <GridItem xs={6} sm={2}>
              <SectionExamples project="Stock Performance Predictor" />
            </GridItem>
          </GridContainer>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <h3>Work Experience</h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={2}>
              <SectionExamples project="Dyne Health and Fitness" />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <SectionExamples project="Grams Evaluation Labs" />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <SectionExamples project="Tirex Transmission" />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <SectionExamples project="Data Cluster Labs" />
            </GridItem>
          </GridContainer>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <h3>Hobbies</h3>
          <GridContainer justify="center">
            <GridItem xs={6} sm={2}>
              <SectionExamples project="Basketball" />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <SectionExamples project="Speed Cubing" />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <SectionExamples project="Dancing" />
            </GridItem>
          </GridContainer>
        </Grid>

        {/* <SectionCompletedExamples /> */}
      </div>
      <Footer />
    </div>
  );
}
