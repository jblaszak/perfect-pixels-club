import PPCLink from "./UI/PPCLink";

import classes from "./Project.module.css";

const Project = ({
  title,
  description,
  image,
  linkText,
  link,
  orientation,
  onMouseOver,
  onMouseOut,
}) => {
  return (
    <div
      className={classes.container}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div>
        <h1>{title}</h1>
        <p className={classes.description}>{description}</p>
        <PPCLink link={link} text={linkText} type="external" styling="button" />
      </div>
      <div className={`${classes.image} ${classes[orientation]}`}>{image}</div>
    </div>
  );
};

export default Project;
