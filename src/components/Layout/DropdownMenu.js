import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import * as CONSTANTS from "../../constants";

import classes from "./DropdownMenu.module.css";

const DropdownMenu = (props) => {
  const offset = -60;
  const duration = 500;

  return (
    <div
      ref={props.targetRef}
      className={classes.dropdown}
      onClick={props.onClickHandler}
    >
      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={offset}
        duration={duration}
      >
        Projects
      </Link>
      <a
        href={`https://www.cryptoflexpixels.com`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Crypto Flex Pixels"
      >
        Crypto Flex Pixels
      </a>
      <Link
        to="roadmap"
        spy={true}
        smooth={true}
        offset={offset}
        duration={duration}
      >
        Roadmap
      </Link>
      <Link
        to="FAQ"
        spy={true}
        smooth={true}
        offset={offset}
        duration={duration}
      >
        FAQ
      </Link>
      <a href={CONSTANTS.TWITTER}>Twitter</a>
      <a href={CONSTANTS.DISCORD}>Discord</a>
    </div>
  );
};

export default DropdownMenu;
