import classes from "./Project.module.css";

const Project = ({
  title,
  description,
  image,
  linkText,
  link,
  orientation,
}) => {
  return (
    <div className={classes.container}>
      <div>
        <h1>{title}</h1>
        <p className={classes.description}>{description}</p>
        {linkText && <div className={classes.link}>{linkText}</div>}
      </div>
      <div className={`${classes.image} ${classes[orientation]}`}>{image}</div>
    </div>
  );
};

export default Project;
