import classes from "./Project.module.css";

const Project = ({
  title,
  description,
  image,
  linkText,
  link,
  orientation,
}) => {
  let linkButton = null;
  if (linkText && link) {
    linkButton = (
      <a
        className={classes.link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={linkText}
      >
        {linkText}
      </a>
    );
  } else if (linkText) {
    linkButton = <div className={classes.link}>{linkText}</div>;
  }

  return (
    <div className={classes.container}>
      <div>
        <h1>{title}</h1>
        <p className={classes.description}>{description}</p>
        {linkButton}
      </div>
      <div className={`${classes.image} ${classes[orientation]}`}>{image}</div>
    </div>
  );
};

export default Project;
