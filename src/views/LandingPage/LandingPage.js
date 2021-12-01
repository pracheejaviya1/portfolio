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

import Parallax from "components/Parallax/Parallax.js";
import React from "react";
// Sections for this page
import ProductSection from "./Sections/ProjectDetails/EduServ/ProductSection.js";
import EvereconProductSection from "./Sections/ProjectDetails/EveRecon/EvereconProductSection.js";


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
        <Parallax filter image={require("assets/img/figma.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
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
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

   if (uid === "2") {
     return (
       <div>
         <Parallax filter image={require("assets/img/evereconbg.png")}>
           <div className={classes.container}>
             <GridContainer>
               <GridItem xs={12} sm={12} md={12}>
                 <h4>
                   Communities are ways for people to come together and pursue
                   similar interests. People make communities that operate like
                   a small organization - they have roles (leader, core members,
                   followers etc.), objectives (promote their interests through
                   events and engaging with their community) and day to day
                   work. The purpose of this platform is to Help communities
                   create an online presence and portfolio. Manage community
                   work such as setting up events, gathering registrations and
                   checking people in Help users discover communities and events
                   of their interest and get on board easily.
                 </h4>
                 <br />
               </GridItem>
             </GridContainer>
           </div>
         </Parallax>
         <div className={classNames(classes.main, classes.mainRaised)}>
           <div className={classes.container}>
             <EvereconProductSection />
           </div>
         </div>
         <Footer />
       </div>
     );
   } else return <div> hi</div>;
}
