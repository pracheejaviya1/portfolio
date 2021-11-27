// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LooksRoundedIcon from "@material-ui/icons/LooksRounded";
import NaturePeopleRoundedIcon from "@material-ui/icons/NaturePeopleRounded";
import landing from "assets/img/new_landing.png";
import login from "assets/img/new_login.png";
import profile from "assets/img/pracheeeeee.png";
import styles1 from "assets/jss/material-kit-react/components/headerLogoStyle";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Header from "components/Header/Header.js";
import HeaderLogo from "components/Header/HeaderLogo.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import { Link } from "react-router-dom";



const useStyles = makeStyles(styles);
const headerStyles = makeStyles(styles1);

export default function ProfilePage(props) {
  const classes = useStyles();
  const classes1 = headerStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLogo className={classes1.topNavBar} />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
      />

      <Parallax small filter image={require("assets/img/robot.jpg")} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Prachee Javiya</h3>
                    <h6>DESIGNER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Programmes",
                      tabIcon: LooksRoundedIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <Link to="landing-page" className={classes.link}>
                              <img
                                src={landing}
                                alt="..."
                                className={
                                  classes.imgRaised +
                                  " " +
                                  classes.imgRounded +
                                  " " +
                                  classes.imgFluid
                                }
                              />
                              <Button color="primary" size="lg" simple>
                                View More
                              </Button>
                            </Link>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Schedule",
                      tabIcon: NaturePeopleRoundedIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <Link to="login-page" className={classes.link}>
                              <img
                                src={login}
                                alt="..."
                                className={
                                  classes.imgRaised +
                                  " " +
                                  classes.imgRounded +
                                  " " +
                                  classes.imgFluid
                                }
                              />
                              <Button color="primary" size="lg" simple>
                                View More
                              </Button>
                            </Link>
                          </GridItem>
                        </GridContainer>
                        
                      ),
                    },
                    
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
