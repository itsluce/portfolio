import React from "react";
import "./Footer.css";
import Wave from "../../../imgs/wave.png";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" />
      <div className="f-content">
        <span>mouhanaddand@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/it_s.luce/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram className="footerIcon" />
          </a>
          <a href="https://github.com/itsluce" target="_blank" rel="noreferrer">
            <FiGithub className="footerIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/luce-dandashly-a1b07021a/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinBoxLine className="footerIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
