import Section from "./Layout/Section";
import Card from "./UI/Card";
import * as CONSTANTS from "../constants";

import classes from "./Community.module.css";

const Community = () => {
  return (
    <Section>
      <div className={classes.container}>
        <Card className={classes.community}>
          <h1>Join Our Community</h1>
          <p>
            Want to know more about our projects or have some ideas you want to
            contribute? Looking for friends that like the same art?
          </p>
          <p>
            Join us to get sneak peaks of things we are working on, obtain free
            NFTs and follow our latest announcements.
          </p>
          <a
            href={CONSTANTS.DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our discord"
          >
            Join Our Discord
          </a>
        </Card>
      </div>
    </Section>
  );
};

export default Community;
