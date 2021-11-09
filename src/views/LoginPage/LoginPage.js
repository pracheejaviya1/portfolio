import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import Description from '@material-ui/icons/DescriptionRounded';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import styles1 from "assets/jss/material-kit-react/components/headerLogoStyle";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Header from "components/Header/Header.js";
import HeaderLogo from "components/Header/HeaderLogo.js";
import React from "react";



const useStyles = makeStyles(styles);
const headerStyles = makeStyles(styles1);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 500);
  const classes = useStyles();
  const classes1 = headerStyles();

  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLogo className={classes1.topNavBar} />}
        fixed
        // changeColorOnScroll={{
        //   height: 100,
        //   color: "white",
        // }}
      />
      <div
        className={classes.pageHeader}
        style={{
          // backgroundImage: "url(" + image + ")",
          backgroundColor: "#000000",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Tell us about yourself</h4>
                    {/* <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-cc-visa"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-cc-paypal"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google"} />
                      </Button>
                    </div> */}
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Full Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Phone number..."
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                              <CallRoundedIcon className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Brief description..."
                      id="desc"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "desc",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Description className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Proceed to pay{" "}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
