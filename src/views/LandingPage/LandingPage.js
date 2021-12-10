import { useParams } from "react-router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
import CarProductSection from "./Sections/ProjectDetails/Car/CarProductSection.js"
import StockProductSection from "./Sections/ProjectDetails/Stock/StockProductSection.js";
import LSTMProductSection from "./Sections/ProjectDetails/LSTM/LSTMProductSection";


const useStyles = makeStyles(styles);

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
         <Parallax image={require("assets/img/evereconbg.png")}>
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
   }
  
  if (uid === "3") {
    return (
      <div>
        <Parallax filter image={require("assets/img/carbg.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h4>
                  A self-driving car, also known as an autonomous vehicle, driverless car, or robotic car is
                  a vehicle that is capable of sensing its environment and
                  moving safely with little or no human input. The future
                  of this technology may have an impact on multiple industries
                  and other circumstances. Self-driving cars combine a variety
                  of sensors to perceive their surroundings, such as radar,
                  lidar, sonar, GPS, odometry and inertial measurement
                  units. Advanced control systems interpret sensory
                  information to identify appropriate navigation paths, as well
                  as obstacles and relevant signage. 
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <CarProductSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

   if (uid === "4") {
     return (
       <div>
         <Parallax filter image={require("assets/img/robot.jpg")}>
           <div className={classes.container}>
             <GridContainer>
               <GridItem xs={12} sm={12} md={12}>
                 <h1 className={classes.title}>Long-Short Term Memory</h1>
                 <h4>
                   Article name - Distributed training over Decentralized data
                   with Federated Learning and applying Co-operative Spectrum
                   Sensing Scheme.
                   <br />
                   The base article was on the topic Long Short-Term Memory
                   based Spectrum Sensing Scheme for Cognitive Radio by N.
                   Balwani and D. K. Patel and Cooperative communications for
                   cognitive radio networks by K. B. Letaief and W. Zhang.
                   <br />
                   Federated Learning is a Machine Learning framework that utilizes
                   the computation power of the client devices (i.e. mobile
                   devices), thereby eradicating the need of explicitly
                   uploading data to the server. Each client device trains the
                   model with local data present on it. The hyper parameters -
                   weights and biases are updated and send back to the server.
                   The server gathers such updated hyper parameters from all the
                   clients after encryption.
                 </h4>
                 <br />
               </GridItem>
             </GridContainer>
           </div>
         </Parallax>
         <div className={classNames(classes.main, classes.mainRaised)}>
           <div className={classes.container}>
             <LSTMProductSection />
           </div>
         </div>
         <Footer />
       </div>
     );
   }
  if (uid === "5") {
    return (
      <div>
        <Parallax filter image={require("assets/img/ml.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h1 className={classes.title}>Stock Performance Predictor</h1>
                <h4>
                  Predicting the stock price trend by interpreting the
                  seemlychaotic market data has always been an attractive topic
                  toboth investors and researchers. When it comes to trading
                  inthe Stock Market, there are many different approaches tofind
                  the right stock. Many forms of analysis have emergedto detect
                  which stock is worth the money. Technical Analysis,
                  Sentimental Analysis and Fundamental Analysis — observing a
                  company’s financials like their Balance Sheet or Cash Flow
                  Statement to determine if the company has valuerelative to
                  their current stock price.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <StockProductSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
   if (uid === "6") {
     return (
       <div>
         <Parallax filter image={require("assets/img/new_bg.png")}>
           <div className={classes.container}>
             <GridContainer>
               <GridItem xs={12} sm={12} md={12}>
                 <h1 className={classes.title}>Dyne Health and Fitness</h1>
                 <h4>
                   Dyne Health and Fitness was a start-up by a few students from
                   BITS Pilani, Rajasthan, India. The aim was to make gymming
                   more accessible to the general public during the pandemic. We
                   made an application that assigned trainers for people who
                   signed up. One can either join as a user or trainer before
                   signing in. Trainers who could add personalized meals and
                   diet plans for their clients. This project is currently
                   Rajasthan based. The application was made in Android Studio.
                   The backend (authentication and verification) was done with
                   Firebase. My role was to code the front- end in XML. The
                   designs were made in Adobe XD. Later, after one month, I also
                   started coding the backend.
                 </h4>
                 <br />
               </GridItem>
             </GridContainer>
           </div>
         </Parallax>
         <Footer />
       </div>
     );
   }
    if (uid === "7") {
      return (
        <div>
          <Parallax filter image={require("assets/img/grams.jpg")}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h1 className={classes.title}>Grams Evaluation</h1>
                  <h4>
                    This project was for one client in the US. The company
                    needed an Android developer to build their application. The
                    function of the app was to predict the quality of a grain
                    using machine learning algorithms. I designed the frontend
                    for the application in Figma and coded the same in XML.
                  </h4>
                  <br />
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <Footer />
        </div>
      );
    }
        if (uid === "8") {
          return (
            <div>
              <Parallax filter image={require("assets/img/evcar.jpg")}>
                <div className={classes.container}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <h1 className={classes.title}>Tirex Transmission</h1>
                      <h4>
                        Tirex transmission is an Ahmedabad based company which
                        builds algorithms for Electric Vehicles. Currently the
                        algorithms are not used in the country since there
                        aren't any EVs in India. The application for charging
                        the EV was designed and developed by me in Android
                        Studio.
                      </h4>
                      <br />
                    </GridItem>
                  </GridContainer>
                </div>
              </Parallax>
              <Footer />
            </div>
          );
        }
              if (uid === "9") {
                return (
                  <div>
                    <Parallax filter image={require("assets/img/datacluster.jpg")}>
                      <div className={classes.container}>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <h1 className={classes.title}>Data Cluster Labs</h1>
                            <h4>
                              It is a Bangalore based startup. Their aim is to
                              collect real world data from users to train AI
                              models.The users click pictures of everyday
                              objects(e.g. number plates) and upload it in the
                              application. The user would get a nominal amount
                              for completing the task. The startup was only a
                              few months old when I joined, so I was
                              multitasking in various domains. I Developed a
                              design for the mobile application after designing
                              a document on Atlassian Confluence which included
                              the features of the app and use case, state and
                              activity diagram. I coded the frontend for the app
                              using React Native and firebase. Later on,
                              documents such as coding conventions, folder
                              structure and construction details were added to
                              confluence for easy handover to the next intern.
                            </h4>
                            <br />
                          </GridItem>
                        </GridContainer>
                      </div>
                    </Parallax>
                    <Footer />
                  </div>
                );
              } else return <div> DOES NOT EXIST</div>;
}
