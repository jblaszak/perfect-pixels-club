import { Link } from "react-router-dom";
import classes from "./PPCLink.module.css";

const PPCLink = ({ target, text, type, styling }) => {
  let link = null;
  if (text && target) {
    let linkClass = classes.link;
    if (styling === "button") {
      linkClass = classes.linkButton;
    } else if (styling === "description") {
      linkClass = classes.linkDescription;
    } else if (styling === "descriptionHover") {
      linkClass = classes.linkDescriptionHover;
    }
    if ((type = "external")) {
      link = (
        <a
          className={linkClass}
          href={target}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={text}
        >
          {text}
        </a>
      );
    } else {
      link = <Link to={target} className={linkClass} />;
    }
  } else if (text) {
    link = <div className={classes.linkButton}>{text}</div>;
  }
  return link;
};

export default PPCLink;
