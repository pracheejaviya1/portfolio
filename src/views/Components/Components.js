import Grid from "@material-ui/core/Grid";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import Slide from "@material-ui/core/Slide";

// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Link } from "react-router-dom";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionHonors from "./Sections/SectionHonors.js";

import EDU from "../../assets/img/book.jpg";
import CAL from "../../assets/img/calendar.jpg";
import CAR from "../../assets/img/car.jpg";
import PC from "../../assets/img/pc.png";
import STOCK from "../../assets/img/stock.jpg";

//inter
import EV from "../../assets/img/ev.jpg";
import CAM from "../../assets/img/camera.jpg";
import GRAIN from "../../assets/img/wheat.jpg";
import DUMB from "../../assets/img/dumbells.jpg";

//hobb
import BB from "../../assets/img/basketball.jpg";
import CUBE from "../../assets/img/cube.jpg";
import DANCE from "../../assets/img/dance.jpg";
// import { Button } from "@material-ui/core";
import Button from "../../components/CustomButtons/Button.js";

import styles1 from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const useStyles1 = makeStyles(styles1);

export default function Components(props) {
  const [classicModal, setClassicModal] = React.useState(false);
  //const uid = props.uid;
  const mystyle = {
    color: "blue",

    padding: "10px",
    alignItems: "center",
  };
  const classes = useStyles();
  const classes1 = useStyles1();
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
              <Link to={"landing-page/1"}>
                <SectionExamples project="EduServ" profile={EDU} />
              </Link>
            </GridItem>
            <GridItem xs={6} sm={2} className={classes.marginLeft}>
              <Link to={"landing-page/2"}>
                <SectionExamples project="EveRecon" profile={CAL} />
              </Link>
            </GridItem>
            <GridItem xs={6} sm={2} className={classes.marginLeft}>
              <Link to={"landing-page/3"}>
                <SectionExamples project="Autonomous Car" profile={CAR} />
              </Link>
            </GridItem>
            <br/>
            <GridItem xs={6} sm={2}>
              <Link to={"landing-page/4"}>
                <SectionExamples project="LSTM-Spectrum Sensing" profile={PC} />
              </Link>
            </GridItem>
            <GridItem xs={6} sm={2}>
              <Link to={"landing-page/5"}>
                <SectionExamples
                  project="Stock Performance Predictor"
                  profile={STOCK}
                />
              </Link>
            </GridItem>
          </GridContainer>
        </Grid>

        <Grid container direction="column" justify="center" alignItems="center">
          <h3>I have some work experience</h3>
          <GridContainer justify="center">
            <GridItem xs={12} sm={2}>
              <Link to={"landing-page/6"}>
                <SectionExamples
                  project="Dyne Health and Fitness"
                  profile={DUMB}
                />
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to={"landing-page/7"}>
                <SectionExamples
                  project="Grams Evaluation Labs"
                  profile={GRAIN}
                />
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to={"landing-page/8"}>
                <SectionExamples project="Tirex Transmission" profile={EV} />
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <Link to={"landing-page/9"}>
              <SectionExamples project="Data Cluster Labs" profile={CAM} />
              </Link>
            </GridItem>
          </GridContainer>
        </Grid>

        <Grid container direction="column" justify="center" alignItems="center">
          <h3>Things I love to do</h3>
          <GridContainer justify="center">
            <GridItem xs={6} sm={2}>
              <SectionExamples project="Basketball" profile={BB} />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <SectionExamples project="Speed Cubing" profile={CUBE} />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <SectionExamples project="Dancing" profile={DANCE} />
            </GridItem>
          </GridContainer>
          <SectionHonors />
          <GridContainer justify="center">
            <h3>Let's Connect!</h3>
          </GridContainer>
          <Link to="login-page" className={classes.link}>
            <Button color="github">
              <i className={classes.socials} /> Get in touch
            </Button>
          </Link>
          <div>
            <br />
            <br />
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
