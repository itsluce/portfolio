import About from "../pages/about/About";
import { ContactUs } from "../pages/contact/contact";
import Footer from "../pages/Footer/Footer";
import Home from "../pages/home/Home";
import Nav from "../pages/nav/Nav";
import Project from "../pages/projects/Project";
import Testimonial from "../pages/Testimonials/Testimonial";

const Navigation = (props) => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Project />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default Navigation;
