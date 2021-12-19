// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import DesktopWindowsRoundedIcon from "@material-ui/icons/DesktopWindowsRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import MobileFriendlyRoundedIcon from "@material-ui/icons/MobileFriendlyRounded";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import styles1 from "assets/jss/material-kit-react/views/components.js";
import Button from "../../../../../components/CustomButtons/Button.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import React from "react";
import Carousel from "./EduServCarousel";

import nirva from "../../../../../assets/img/nirva.png";
import karan from "../../../../../assets/img/karan.png";
import screen1 from "../../../../../assets/img/screen1.png";
import screen2 from "../../../../../assets/img/screen2.png";
import HTA from "../../../.././../assets/img/HTA.jpg";
const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1);

export default function ProductSection() {
  const classes = useStyles();
  const classes1 = useStyles1();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Case Study</h2>
          <h4 className={classes.title}>Project Overview</h4>
          <h5 className={classes.description}>
            This project was for my specialization course in Human Computer
            Interaction. This app is designed for and E-learning application.
            There are two profiles, Student and Teacher with different
            interfaces.
          </h5>
          <br />
          <form action="https://www.figma.com/proto/MsDCsv1mh75BgKWuzQeT7J/EduServ?node-id=338%3A0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=338%3A0">
            <Button color="primary" type="submit">
              <i className={classes1.socials} />
              See prototype
            </Button>
          </form>
          <br />
        </GridItem>
      </GridContainer>
      <div className={classes.description}>
        <br />
        <h3>Market Survey</h3>
        <br />
        <GridContainer justify="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <GridItem xs={6}>
            <h4>Coursera</h4>
            <p>
              Coursera has a simple UI/UX interaction design but it just lacks
              in its landing page where they should be showcasing some of the
              domains as well as courses offered. Otherwise the UI/UX design for
              coursera is pretty interactive. One thing I would personally like
              to add would be a dark theme because not everyone does not prefer
              using a light theme.
            </p>
          </GridItem>
          <GridItem xs={6}>
            <h4>Udacity</h4>
            <p>
              Udacity is more consistent as a UI/UX design and the best thing we
              liked is about is about the sitemap given at the bottom which
              provides user better guidance through each section. Udacity has
              more of a dashboard kind of feel which helps user to navigate
              better and keep track of their progress more easily. The only
              thing which I would like to add to is a Dark Theme Feature to the
              site.
            </p>
          </GridItem>{" "}
          <GridItem xs={6}>
            <h4>Skill Share</h4>
            <p>
              SkillShare has a student friendly UI that isn’t overwhelming and
              so it is loved by many people and instructors alike. Once a course
              is opened, the entire list of available videos is visible to the
              user for his/her access. But sometimes too much information and
              visuals can be confusing. But the overview of a course given when
              it is opened compensates for it. Moreover the font and theme used
              is pretty much clear and visually enhancing but as we said not so
              overwhelming either we would say, keeping in mind the design
              principles
            </p>
          </GridItem>{" "}
          <GridItem xs={6}>
            <h4>Kaggle</h4>
            <p>
              Kaggle has a very attractive user-friendly UI. It is famous for
              its very simplistic UX where user faces no problems in finding the
              required item. There is a left bar where the user gets an entire
              sitemap and on the right side, the user can access the personal
              profile and account settings. There is also a consistent blue and
              white light theming across the entire website. Certain places
              where a user may spend more time are provided in a dark theme also
              so the user feels comfortable to be around.
            </p>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.description}>
        <br />
        <InfoArea
          title="Tools"
          icon={BorderColorRoundedIcon}
          iconColor="danger"
          vertical
        />
        <GridContainer justify="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <p className={classes.description}>
            We have used <span className={classes.bold}>Figma</span> for
            building mobile app designs. It is very similar to Adobe XD. For
            students, Figma is the best tool for designing as it does not have
            any in-app purchases. Prototyping and working with Figma is very
            convenient. A few features are discussed below.
          </p>
          <GridItem xs={6}>
            <h4>Drag n drop image uploading into a mask.</h4>
            <p>
              This would save a lot of headaches clicking to edit image layers
              and searching for files over and over. You can option + command +
              drag components onto existing ones to replace them. Images would
              be great too, because profile photos don’t come in one flavor!
            </p>
          </GridItem>
          <GridItem xs={6}>
            <h4>Prototype linking between pages.</h4>
            <p>
              Designers tend to keep things organized across pages. Linking our
              prototype screens across pages would be phenomenal. This would be
              awesome for teams who have delegated design work for a single
              product into segmented tasks like homepage versus settings.
            </p>
          </GridItem>{" "}
          <GridItem xs={6}>
            <h4>Liveshare</h4>
            <p>
              If you click on someone’s avatar, you get to see what they're
              seeing on their screen and follow their cursor around.
            </p>
          </GridItem>{" "}
          <GridItem xs={6}>
            <h4>Built-in Commenting</h4>
            <p>
              Anyone with the link can add comments anywhere on the design. You
              can tag people in comments, mark comments as resolved, and even
              integrate with Slack.
            </p>
          </GridItem>
        </GridContainer>
        <br />
        <InfoArea
          title="Personas"
          icon={PeopleAltRoundedIcon}
          iconColor="info"
          vertical
        />
        <p>
          Before creating an imaginary user, it is important to understand what
          Personas are. How do we create them? Why are they important in Human
          Interaction? A persona is a profile which represents a cluster of our
          target users. UX personas help the team to empathise with a group of
          real people. “Your target users’ pain points should influence your
          design decisions more than anything else”.
        </p>
        <GridContainer justify="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <GridItem>
            <img src={nirva} width={550} height={400} />
            <img src={karan} width={550} height={400} />
          </GridItem>
        </GridContainer>

        <InfoArea
          title="Scenario Descriptions"
          icon={BookmarksRoundedIcon}
          iconColor="success"
          vertical
        />

        <GridContainer justify="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <p className={classes.description}>
            Designers need to understand their users if they want to make
            products that people will use. By understanding them, you can help
            create solutions that help them achieve their goals. A user scenario
            should cover all their bases and validate every move users make in
            the product.
          </p>
          <GridItem xs={6}>
            <h3 className={classes.subtitle}>1</h3>
            <p>
              A teacher clicks the button create a course, there the system asks
              to give title to the course, teacher gives Android Development and
              press continue, then is asked to give category from different
              options such as Design, Marketing etc. chooses IT and Software.
              The system asks to provide course description, after providing
              teacher clicks continue. Now teacher sees empty screen, he presses
              a floating plus button, after clicking a window opens to give
              video description after giving and clicking proceed teacher can
              see select video button, he clicks it, he now sees a window with
              all videos on phone he selects preview.mp4. and clicks open the
              video uploading starts. The video is now playable.
            </p>
          </GridItem>
          <GridItem xs={6}>
            <h3 className={classes.subtitle}>2</h3>
            <p>
              Nirva is a science student, currently in 11th grade. She has an
              exam coming up next week and has doubts regarding a few topics she
              missed in the class. For end moment revision she seeks a platform
              which gives a birds eye view of the topics. She is skeptical about
              paying for the course as she would be using only for a few days.
              The app that we aim to design will have a feature of free trial,
              for which she can sign up for. Only 4 clicks, and she will be able
              to unlock all features for the week. This hassle free navigation
              will ensure no time is wasted.
            </p>
          </GridItem>{" "}
          <GridItem xs={6}>
            <h3 className={classes.subtitle}>3</h3>
            <p>
              Consider a situation of a typical middle-class university student.
              The student goes to his/her college and learns various subjects
              every semester and this process continues for 3-4 years. Often
              there is a chance that no particular subject has been covered in
              great depth for him/her to be called an expert. Under such
              situations, the student may want to cover the subject in more
              detail. Now for that, the student has to either buy bulky and
              expensive books or refer to a library or join some coaching
              classes. But none of the above options are viable for long term.
              Under such circumstances, the student may refer to the internet.
              Now the internet is a huge resource and has lots of stuff. So it
              may be very difficult to find out what is important and correct
              among all the other information. Under this, providing a
              structured way to gather the knowledge turns out to be a blessing
              and trustworthy for anyone to learn and pursue any subject.
            </p>
          </GridItem>{" "}
          <GridItem xs={6}>
            <h3 className={classes.subtitle}>4</h3>
            <p>
              Due to the recent pandemic outbreak, schools and colleges have
              been shut in order to prevent the widespread and hence all the
              teaching methodologies have found their way through online
              education. Moreover it has given us the opportunity to develop our
              skills and learn new things while being at home. What else can
              provide you with better learning outcomes other than Websites or
              Apps giving us a platform for learning and developing skills based
              on your interests. It can provide you with a vast variety of
              courses to select from according to your interests. Moreover it
              can provide you with flexible work hours and complete the courses
              according to your pace. Hence, such apps and websites have come
              across a lot of demand in recent years and developing a UI which
              can provide users with a comfortable learning environment is a
              must.
            </p>
          </GridItem>
        </GridContainer>
      </div>
      <InfoArea
        title="Initial Screen Designs"
        icon={MobileFriendlyRoundedIcon}
        iconColor="primary"
        vertical
      />
      <GridContainer justify="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <p className={classes.description}>
          After collecting the analysis data from the initial study, creating
          the problem statement, and finalizing the pain points of the users in
          the prior steps, I moved to the ideation phase. I created a user
          journey map of what a basic start to finish journey looks like while
          purchasing a course. It helps in understanding ways users can interact
          with the product, as well as allowing us to see navigation through
          user goals. Then wireframed each screen on paper. Followed by a
          digital wireframe I joined the basic screens to make a meaningful flow
          of the user path.
        </p>
        <br />
        <GridItem xs={12}>
          <img src={HTA} width={700} height={500} />
        </GridItem>
        <GridItem xs={6}>
          <br />
          <img src={screen1} width={300} height={450} />
        </GridItem>
        <GridItem xs={6}>
          <br />

          <img src={screen2} width={300} height={450} />
        </GridItem>
      </GridContainer>
      <div>
        <Carousel />
      </div>
    </div>
  );
}
