import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import Description from "@material-ui/icons/DescriptionRounded";
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
import emailjs from "emailjs-com";


const useStyles = makeStyles(styles);
const headerStyles = makeStyles(styles1);

export default function LoginPage(props) {

  function sendEmail(e) {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(
        `service_ghdiqt1`,
        "template_9zh18ch",
        e.target,
        "user_YqaOS0vEi9J2TiLVyiA1l"
      )
      .then(
        (result) => {
          alert("Message Sent", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
          console.log(error.text);
        }
      );
    e.target.reset();
    // clears form
  }

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 500);
  const classes = useStyles();
  const classes1 = headerStyles();

  return (
    <div>
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
                <form className={classes.form} onSubmit={sendEmail}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Contact me</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Full Name"
                      id="name"
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
                      labelText="Email"
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
                      labelText="Message"
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "desc",
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" simple color="primary" size="lg">
                      Submit{" "}
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
