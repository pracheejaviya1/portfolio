/*eslint-disable*/
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Logo from "assets/img/new_logo.svg";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";




const useStyles = makeStyles(styles);

export default function HeaderLogo(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="Home"
          title="Home"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="" className={classes.link}>
            <img src={Logo} />
          </Link>
        </Tooltip>
      </ListItem>
    </List>
  );
}
