import { NavLink } from "react-router-dom";
import Logo from "../../images/logo/Logo";
import Burger from "../../images/Burger";
import ContactUs from "../buttons/contactUs/ContactUs";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header>
      {isMobileMenuOpen && (
        <div className="mobile-menu-wrapper">
          <div className="links">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              Services
            </NavLink>
            <NavLink
              to="/employers"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              Employers
            </NavLink>
            {/* <NavLink to="/seekers">Job Seekers</NavLink> */}
            {/* <NavLink to="/join">Join Our Team</NavLink> */}
            <NavLink
              to="/aboutus"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              About Us
            </NavLink>
            {/* <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/legal">Legal</NavLink> */}
            <div className="contact-us">
              <ContactUs />
            </div>
          </div>
        </div>
      )}
      <div className="nav-container">
        <NavLink to="/">
          <div className="logo">
            <Logo />
          </div>
        </NavLink>
        <div
          className="burger-icon"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <Burger />
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/employers">Employers</NavLink>
          {/* <NavLink to="/seekers">Job Seekers</NavLink> */}
          {/* <NavLink to="/join">Join Our Team</NavLink> */}
          <NavLink to="/aboutus">About Us</NavLink>
          {/* <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/legal">Legal</NavLink> */}
          <ContactUs />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
