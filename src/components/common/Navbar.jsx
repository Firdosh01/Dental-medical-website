import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import Button from "./Button";

const Navbar = ({navbarBgColor}) => {
  return (
    <div className="max_width_container !pt-[40px]">
      <div
        className="navbar_container"
        style={{ backgroundColor: `${navbarBgColor}` }}
      >
        <div className="navbar">
          <div>
            <img src="/assets/logos/logo.png" alt="" />
          </div>
          <nav>
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
            </ul>
          </nav>
          <div>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
