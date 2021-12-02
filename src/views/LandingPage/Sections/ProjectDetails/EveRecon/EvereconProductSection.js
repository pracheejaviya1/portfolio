// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import React from "react";
import Carousel from "./EvereconCarousel.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Details</h2>
          <h5 className={classes.description}>
            The Community and Event Management System, “EveRecon” is a software
            product being developed by the project team. The system provides
            users with ease of access having a user-friendly framework with an
            interactive interface. The System is a web application with
            primarily 3 different user interfaces for normal users, event
            organizers and sponsors The System is going to provide users with
            all the desired information of an upcoming event in his/her locality
            and managing a community as well as the event from an organizers
            perspective The application is going to work with a database at its
            back-end where all the data regarding a specific event and user data
            are stored.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tools used"
              description="PostgreSQL, Django, Django graphene, Gatsby.js,  React.js, Apollo Client, Tailwind UI, Heroku, Vercel, Cloudinary, Atlassian Confluence"
              icon={BookmarksRoundedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Software Engineering"
              description="The development methodologies considered for this project is Extreme Kanban which is a combination of Kanban and Extreme Programming."
              icon={FavoriteRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tools"
              description="Icon pack used was hero-icons. We used figma to develop the designs."
              icon={BorderColorRoundedIcon}
              iconColor="danger"
              vertical
            />
          </GridItem> */}
        </GridContainer>
        <Carousel />
      </div>
    </div>
  );
}
