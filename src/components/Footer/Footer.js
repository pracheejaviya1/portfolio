/*eslint-disable*/
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import React from "react";



const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        
          &copy; {1900 + new Date().getYear()}, made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          Prachee Javiya
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
