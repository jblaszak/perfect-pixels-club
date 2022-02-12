import React from "react";

import PPCLink from "./UI/PPCLink";
import Section from "./Layout/Section";

import * as CONSTANTS from "../constants";

import classes from "./Roadmap.module.css";

const Roadmap = () => {
  const roadmapList = [
    {
      color: "#83ffc1",
      title: "Crypto Flex Pixels Launch",
      isDone: true,
      description: `Launch of our first project to learn Web3 and NFTs. This is our community token and that will reward its holders.
      A scaling mint price ensures the early adopters get rewarded the most. We've also added another mechanic (boosts) that we will 
      use to reward holders with higher boosts. As the community grows, the picture will gradually get discovered.`,
    },
    {
      color: "#e7bafa",
      title: "Perfect Pixels Club Site",
      isDone: true,
      description: `This site right here. In order to bring all the projects we have planned under the same umbrella and provide a 
      central place for reaching our community we've put this site together. Membership to the club is open to anyone that is interested 
      in supporting our projects. Joining the club is as easy as purchasing one of our NFTs. As our community grows there will be all 
      kinds of rewards and giveaways for our members!`,
    },
    {
      color: "#e8a68b",
      title: "Collaborations",
      isDone: true,
      description: (
        <React.Fragment>
          We want to work together with others to help build each others
          communities and are open to collaboration! We've set up a custom smart
          contract for all collabs so that we may use them for a planned staking
          feature for boosted rewards of our ERC-20 token. If you're interested
          in a collab please connect with us on Send us a message on{" "}
          <PPCLink
            target={CONSTANTS.TWITTER}
            text="Twitter"
            type="external"
            styling={"description"}
          />{" "}
          or{" "}
          <PPCLink
            target={CONSTANTS.DISCORD}
            text="Discord"
            type="external"
            styling={"description"}
          />
          !
        </React.Fragment>
      ),
    },
    {
      color: "#bbefff",
      title: "ERC-20 Token",
      isDone: false,
      description: `An ERC-20 token is planned to provide utility to future projects. We're still exploring how best to distribute these,
      whether through airdrops or some staking mechanism but it will almost certainly be tied to the Crypto Flex Pixels project which is
      intended to act as a longer-term community NFT. Collab NFTs will also see some ERC-20 token related benefit.`,
    },
    {
      color: "#ffead2",
      title: "Future Projects",
      isDone: false,
      description: `Several future projects are planned, not all of which are listed in the projects section. Some will involve pixels
      and some won't. The crypto space is evolving rapidly and there's no telling where the future will take us, but with each new day 
      of interacting with the community we're getting more and more ideas. Stay tuned...`,
    },
  ];

  return (
    <div id="roadmap" className={classes.container}>
      <Section className={classes.roadmap}>
        <div className={classes.header}>
          <h1>Roadmap</h1>
          <p>
            This roadmap outlines our goals for this project. Check back here to
            see the current state of the project and announcements of future
            projects!
          </p>
        </div>
        <div className={classes.timeline}>
          {roadmapList.map((item) => (
            <div key={item.title}>
              <h1 className={classes.title} style={{ color: item.color }}>
                {item.title}{" "}
                {item.isDone && <div className={classes.status}>DONE</div>}
              </h1>
              <p className={classes.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Roadmap;
