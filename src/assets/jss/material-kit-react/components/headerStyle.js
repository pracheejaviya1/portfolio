import {
  container,
  defaultFont
} from "assets/jss/material-kit-react.js";

const headerStyle = {
  
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute",
    zIndex: "1100"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: {
    ...container,
    minHeight: "50px",
    //flex: "1",
    alignItems: "right",
    //justifyContent: "space-between",
    display: "block",
    //flexWrap: "nowrap"
    padding: "10px",
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF"
  },

  linksPosition:
  {
    display: "block",
    float: "right",

  },
};

export default headerStyle;
