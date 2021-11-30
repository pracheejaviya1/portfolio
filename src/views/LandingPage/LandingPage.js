import { useParams } from "react-router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles1 from "assets/jss/material-kit-react/components/headerLogoStyle";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLogo from "components/Header/HeaderLogo.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import WorkSection from "./Sections/WorkSection.js";

const useStyles = makeStyles(styles);
const headerStyles = makeStyles(styles1);

export default function LandingPage(props) {
  let { uid } = useParams();
  const classes = useStyles();
  //const classes1 = headerStyles();
  console.log(uid);
  const { ...rest } = props;
  if (uid === "1") {
    return (
      <div>
        <Parallax filter image={require("assets/img/robot.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={6} sm={12} md={6}>
                <h2 className={classes.title}>EduServ</h2>
                <h4>
                  The pandemic led every student and teacher across the globe
                  get acquainted with online studying platforms. Due to increase
                  in demand, improvements in Human-Computer Interaction have
                  reached the epitome. The students have to adapt to the methods
                  where they can be delivered materials without physical contact
                  and so do teachers who must be able to deliver content in
                  online mode of education. This was the perfect opportunity to
                  develop an E-learning platform.{" "}
                </h4>
                <br />
                {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            {/* <TeamSection /> */}
            {/* <WorkSection /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  else
    return <div> hi</div>
}
