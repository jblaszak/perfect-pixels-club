import { useEffect, useState } from "react";

import classes from "./Hero.module.css";

const Hero = () => {
  const [animDone, setAnimDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimDone(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classes.hero}>
      <div className={animDone ? classes.final : classes.perfect}>Perfect</div>
      <div className={animDone ? classes.final2 : classes.pixels}>Pixels</div>
      <div className={animDone ? classes.final3 : classes.club}>Club</div>
    </div>
  );
};

export default Hero;
