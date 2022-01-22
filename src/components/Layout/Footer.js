import React from "react";
import { Link } from "react-router-dom";

import IconLinks from "./IconLinks";
import * as CONSTANTS from "../../constants";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.top}>
          <div>
            <h1>Perfect Pixels Club</h1>
            <p>
              A collection of different NFT projects on the polygon network!
            </p>
          </div>
          <div className={classes.links}>
            <Link className={classes.homeLink} to="/">
              Home
            </Link>
            <Link to="/terms">Terms & Conditions</Link>
            {/* <a
              href={`https://polygonscan.com/address/${CONSTANTS.CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Smart Contract"
            >
              Smart Contract
            </a> */}
          </div>
        </div>
        <div className={classes.bottom}>
          <div>
            {`© ${new Date().getFullYear()} Perfect Pixels Club. All rights reserved.`}
          </div>
          <IconLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
