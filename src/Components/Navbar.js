import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navcss from "../Navbar.module.css";
import adminIcon from '../images/adminIcon2.png';

export default function Navbar(props) {
  
  const [isActive, setActive] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const [activeLink, setActiveLink] = useState("Home");

  const [scroll, setScroll] = useState(false);
  
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup scroll event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    if (location.pathname === "/recruitment" && activeLink !== "Recruitment") {
      setActiveLink("Recruitment");
    } else if (location.pathname === "/joinUs") {
      setActiveLink("Join Us");
    } else {
      setActiveLink("Home");
    }
  }, [location, activeLink]);

  const handleToggle = () => {
    setActive(prev => !prev);
    setIsCheck(prev => !prev);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    handleToggle();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Determine if the route is `/joinUs`
  const isJoinUsRoute = location.pathname === "/joinUs";

  return (
    <nav className={`${scroll ? Navcss.navbar : ''}`}>
      <ul className={Navcss.nav_list}>
        <div className={Navcss.logo}>
          

          <NavLink
            onClick={() => handleLinkClick("Home")}
            to="/"
          >
            <img
              src="images/logo2.png"
              className={Navcss.logo_image}
              alt="Logo"
            />
          </NavLink>
        </div>

        <div className={`${Navcss.rightnav} ${!isActive ? Navcss.rightnav1 : ''} ${!isCheck ? Navcss.barNotActive : ''}`}>
          <li>
            <NavLink
              className={`${Navcss.hover_underline_animation} ${activeLink === "Home" ? Navcss.clickactive : ''}`}
              onClick={() => handleLinkClick("Home")}
              to="/"
              style={{ color: isJoinUsRoute && activeLink === "Home" ? 'white' : '' }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <Link
              className={`${Navcss.hover_underline_animation} ${activeLink === "Our Team" ? Navcss.clickactive : ''}`}
              onClick={() => handleLinkClick("Our Team")}
              to="/our_team_y20"
              style={{ color: isJoinUsRoute && activeLink === "Our Team" ? 'white' : '' }}
            >
              Our Team
            </Link>
          </li>

          <li>
            <Link
              className={`${Navcss.hover_underline_animation} ${activeLink === "Events" ? Navcss.clickactive : ''}`}
              onClick={() => handleLinkClick("Events")}
              to="/events"
              style={{ color: isJoinUsRoute && activeLink === "Events" ? 'white' : '' }}
            >
              Events
            </Link>
          </li>

          <li>
            <Link
              className={`${Navcss.hover_underline_animation} ${activeLink === "Credits" ? Navcss.clickactive : ''}`}
              onClick={() => handleLinkClick("Credits")}
              to="/credits"
              style={{ color: isJoinUsRoute && activeLink === "Credits" ? 'white' : '' }}
            >
              Credits
            </Link>
          </li>

          <li>
            <Link
              className={`${Navcss.hover_underline_animation} ${activeLink === "Blogs" ? Navcss.clickactive : ''}`}
              onClick={() => handleLinkClick("Blogs")}
              to="/blogs"
              style={{ color: isJoinUsRoute && activeLink === "Blogs" ? 'white' : '' }}
            >
              Blogs
            </Link>
          </li>

          <li>
            <Link
              className={`${Navcss.hover_underline_animation} ${activeLink === "Infobotics" ? Navcss.clickactive : ''}`}
              onClick={() => handleLinkClick("Infobotics")}
              to="/infobotics"
              style={{ color: isJoinUsRoute && activeLink === "Infobotics" ? 'white' : '' }}
            >
              Infobotics
            </Link>
          </li>

          <li>
            <Link
              className={`${Navcss.hover_underline_animation} ${activeLink === "Join Us" ? Navcss.clickactive : ''}`}
              onClick={() => handleLinkClick("Join Us")}
              to="/joinUs"
              style={{ color: isJoinUsRoute ? 'white' : '' }}
            >
              Join Us
            </Link>
          </li>
          <li>
          <Link
              className={`${Navcss.hover_underline_animation} ${activeLink === "Admin" ? Navcss.clickactive : ''}`}
              to="/admin"
              onClick={() => handleLinkClick("Admin")}
            >
              <img
                src={adminIcon}
                alt="Admin"
                width="45"
                height="45"
                style={{
                  borderRadius: "50%", // Makes the image round
                  boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.15)" // Applies the shadow
                }}
              />
            </Link>
          </li>
        </div>
      </ul>

      <div className={Navcss.burger} onClick={handleToggle}>
        <div className={Navcss.line}></div>
        <div className={Navcss.line}></div>
        <div className={Navcss.line}></div>
      </div>
    </nav>
  );
}