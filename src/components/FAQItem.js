import { useState } from "react";
import classes from "./FAQItem.module.css";

const FAQItem = ({ title, description }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className={classes.FAQItem}
      onClick={() =>
        setIsShown((prev) => {
          return !prev;
        })
      }
    >
      <div className={`${classes.title} ${isShown ? classes.titleShown : ""}`}>
        {title}
        <div
          className={`${classes.caret} ${isShown ? classes.caretUp : ""}`}
        ></div>
      </div>
      <div
        className={`${classes.description} ${
          isShown ? classes.descriptionShown : ""
        }`}
      >
        {description}
      </div>
    </div>
  );
};

export default FAQItem;
