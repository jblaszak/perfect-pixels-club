import React, { useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import useOutsideCheck from "../../hooks/useOutsideCheck";
import useResponsive from "../../hooks/useResponsive";

import IconLinks from "./IconLinks";
import DropdownMenu from "./DropdownMenu";

import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const isSmallScreen = useResponsive("(max-width: 700px)");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const history = useHistory();

  const statusMessage = useSelector((state) => state.status.statusMessage);

  const onClickHandler = (e) => {
    setOpen(!open);
  };

  useOutsideCheck(dropdownRef, onClickHandler);

  const headerClasses = `${classes.header} ${statusMessage ? classes.downShifted : ""}`;

  const offset = -60;
  const duration = 500;
  const activeClass = classes.active;

  let navbar = (
    <nav className={classes.navbar}>
      <ul className={classes.nav}>
        {/* <li>
          <NavLink to="/breathwork">Breathwork</NavLink>
        </li> */}
        <li>
          <Link
            activeClass={activeClass}
            to="projects"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass={activeClass}
            to="roadmap"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
          >
            Roadmap
          </Link>
        </li>
        <li>
          <Link
            activeClass={activeClass}
            to="FAQ"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
          >
            FAQ
          </Link>
        </li>
      </ul>
      <IconLinks />
    </nav>
  );

  if (isSmallScreen) {
    navbar = (
      <nav className={classes.navbar}>
        <ul className={classes.nav}>
          <li>
            <button href="#" className={classes.hamburger} onClick={onClickHandler}>
              ≡
            </button>
            {open && <DropdownMenu targetRef={dropdownRef} onClickHandler={onClickHandler} />}
          </li>
        </ul>
      </nav>
    );
  }

  const logoClickHandler = () => {
    const pathname = window.location.pathname;
    if (pathname === "/") {
      scroll.scrollToTop();
    } else {
      history.push("/");
    }
  };

  return (
    <React.Fragment>
      <header className={headerClasses}>
        <div className={classes.container}>
          <div className={classes.logo} onClick={logoClickHandler}>
            Perfect Pixels Club
          </div>
          {navbar}
        </div>
      </header>
      <div className={classes.spacer} />
    </React.Fragment>
  );
};

export default MainHeader;
