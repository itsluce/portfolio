import { FiInstagram, FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import classes from "./home.module.css";
const Home = (props) => {
  return (
    <div className={classes.homeContainer} id="home">
      <div className={classes.firstContainer}>
        <h2 data-text="Hi! I'm">Hi! I'm</h2>
        <h2 data-text="Mouhanad Dandashly">Mouhanad Dandashly</h2>
        <p>
          Frontend developer with hight skill level and experience in web
          designing and development.
        </p>
        <div className={classes.moveButton}>
          <a href="#contact" rel="" className={classes.hireButton}>
            Hire Me
          </a>
          <div className={classes.homeIconContainer}>
            <a
              href="https://www.instagram.com/it_s.luce/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram className={classes.homeIcon} />
            </a>
            <a
              href="https://github.com/itsluce"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className={classes.homeIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/luce-dandashly-a1b07021a/"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinBoxLine className={classes.homeIcon} />
            </a>
          </div>
        </div>
      </div>
      {/* <div className={classes.heroImg}>
        <img src={hero} alt="" />
      </div> */}
    </div>
  );
};
export default Home;
