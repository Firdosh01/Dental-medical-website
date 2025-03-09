import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import Button from "./Button";

const Navbar = ({ navbarBgColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max_width_container !pt-[40px] ">
      <div
        className="navbar_container 2xl:!mx-0 !mx-5"
        style={{ backgroundColor: `${navbarBgColor}` }}
      >
        <div className="navbar">
          <div className="logo">
            <img src="/assets/logos/logo.png" alt="" />
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <span
              className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
            ></span>
          </div>

          {/* Desktop & Mobile Navigation */}
          <nav className={`nav-container ${isMenuOpen ? "open" : ""}`}>
            <ul className="flex gap-[38px] navigation_links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `b2_medium text-[var(--dark-blue-color)] ${
                      isActive ? "b2_semibold !b2_medium" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `b2_medium text-[var(--dark-blue-color)] ${
                      isActive ? "b2_semibold !b2_medium" : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `b2_medium text-[var(--dark-blue-color)] ${
                      isActive ? "b2_semibold !b2_medium" : ""
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `b2_medium text-[var(--dark-blue-color)] ${
                      isActive ? "b2_semibold !b2_medium" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              {/* Mobile-only button */}
              <li className="mobile-only-button">
                <Button>Book Now</Button>
              </li>
            </ul>
          </nav>

          {/* Desktop-only button */}
          <div className="desktop-only-button">
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
