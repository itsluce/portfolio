import classes from "./about.module.css";
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import { DAMMY__DATA } from "../../dummy-data/dammy-data";
const About = (props) => {
  useEffect(() => {
    ScrollOut({
      targets:
        ".aboutContentContainer p,.aboutContentContainer h2,.aboutContentContainer a,section,article",
    });
  });
  return (
    <div className={classes.about} id="about">
      <div className={classes.aboutContainer}>
        <div className="aboutContentContainer">
          <h2>My Awesome</h2>
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            excepturi beatae, enim, labore nihil voluptates quibusdam doloremque
          </p>
          <a
            target={"_blank"}
            href="https://drive.google.com/file/d/1ShDrt09qKVP2zf-lFRuqd_-P33uvg2qH/view?usp=share_link"
            rel="noreferrer"
          >
            DOWNLOAD CV.
          </a>
        </div>
        <section>
          <div className={classes.aboutCardContainer}>
            {DAMMY__DATA.map((item) => {
              return (
                <div className={classes.aboutCard} key={item.id}>
                  <div className="center">
                    <div>{item.icon}</div>
                  </div>
                  <div className="center">
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.describtion}</p>
                  <div className="center">
                    <a href="#project" rel="noreferrer">
                      Learn More
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <article className={classes.futearContainer}>
        <div className={classes.futearCard}>
          <div>
            <h3>+2</h3>
          </div>
          <h3>
            <span>Year</span>
            <span>Experience</span>
          </h3>
        </div>
        <div className={classes.futearCard}>
          <div>
            <h3>+20</h3>
          </div>
          <h3>
            <span>completed</span>
            <span>Projects</span>
          </h3>
        </div>
        <div className={classes.futearCard}>
          <div>
            <h3>+1</h3>
          </div>
          <h3>
            <span>Company</span>
            <span>Work</span>
          </h3>
        </div>
      </article>
    </div>
  );
};
export default About;
