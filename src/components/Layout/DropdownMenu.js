import React from "react";
import * as CONSTANTS from "../../constants";

import classes from "./DropdownMenu.module.css";

const DropdownMenu = (props) => {
  return (
    <div
      ref={props.targetRef}
      className={classes.dropdown}
      onClick={props.onClickHandler}
    >
      <a className={classes.link} href={CONSTANTS.TWITTER}>
        Twitter
      </a>
      <a className={classes.link} href={CONSTANTS.DISCORD}>
        Discord
      </a>
      <a
        href={`https://www.cryptoflexpixels.com`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Crypto Flex Pixels"
        className={classes.link}
      >
        Crypto Flex Pixels
      </a>
    </div>
  );
};

export default DropdownMenu;
