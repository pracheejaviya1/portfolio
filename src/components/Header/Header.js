import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import React from "react";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown implementation="css" className={classes.linksPosition}>
          {rightLinks}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
