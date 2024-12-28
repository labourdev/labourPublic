import React from "react";
import "./Footer.scss";
import LogoDark from "../../images/logo/LogoDark";
import Mail from "../../images/icons/Footer/Mail";
import Phone from "../../images/icons/Footer/Phone";
import Location from "../../images/icons/Footer/Location";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-wrapper">
        <LogoDark />
        <div className="welcome-text">
          Welcome to Labour Link Group, your trusted partner in labour hire
          solutions for the construction and civil industries across Sydney. We
          connect you with fully vetted, highly skilled professionals and
          skilled labour tailored to your specific needs.
        </div>
      </div>
      <div className="links-wrapper">
        <div className="title">Quick Links</div>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/services">
            <li>Services</li>
          </NavLink>
          <NavLink to="/employers">
            <li>Employers</li>
          </NavLink>
          <NavLink to="/jobseekers">
            <li>Job Seekers</li>
          </NavLink>
          <NavLink to="/joinourteam">
            <li>Job Seekers</li>
          </NavLink>
          <NavLink to="/aboutus">
            <li>About Us</li>
          </NavLink>
        </ul>
      </div>

      <div className="links-wrapper">
        <div className="title">Contact Info</div>
        <div className="d-flex flex-column gap-15">
          <div className="d-flex gap-10">
            <div className="flex-shrink">
              <Location />
            </div>
            <div>20 Cooper Square, New York, NY 10003, USA</div>
          </div>
          <div className="d-flex gap-10">
            <Mail />
            <div>info@labourlinkgroup.com</div>
          </div>
          <div className="d-flex gap-10">
            <Phone />
            <div>+89 789 784 4589</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
