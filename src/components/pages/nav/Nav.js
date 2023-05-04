import TemporaryDrawer from "./menuNav/MenuNavigation";
import classes from "./nav.module.css";
const Nav = (props) => {
  return (
    <nav>
      <div className={classes.logoContainer}>
        <div className="center">
          <a className={classes.logo} href="./" rel="">
            Luce
          </a>
        </div>
      </div>
      <div className={classes.navList}>
        <a href="#home" rel="">
          Home
        </a>
        <a href="#about" rel="">
          About
        </a>
        <a href="#project" rel="">
          Project
        </a>
        <a href="#testimonial" rel="">
          Testimonial
        </a>
        <a href="#contact" rel="">
          contact
        </a>
      </div>
      <div className={classes.menuNav}>
        <TemporaryDrawer />
      </div>
    </nav>
  );
};
export default Nav;
