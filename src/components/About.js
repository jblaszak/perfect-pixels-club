import Section from "./Layout/Section";
import Card from "./UI/Card";

import classes from "./About.module.css";

const About = () => {
  return (
    <Section>
      <Card className={classes.card}>
        <h1>About</h1>
        <p>
          The Perfect Pixels Club, a central place for all our projects! We're
          full of ideas we can't wait to share with the community! Some of our
          projects will be related to pixels and some won't, but all projects
          will be on the Polygon network for cheap gas fees!
        </p>
        <p>
          NFTs are an ever evolving ecosystem and we plan to be right there
          along with the changes, bringing you whatever our crazy minds think
          of.
        </p>
        <p>
          Joining the club is as easy as purchasing one of our NFTs. As our
          community grows there will be all kinds of rewards and giveaways for
          our members!
        </p>
      </Card>
    </Section>
  );
};

export default About;
