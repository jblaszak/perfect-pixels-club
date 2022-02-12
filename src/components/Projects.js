import { useState } from "react";

import Section from "./Layout/Section";
import Project from "./Project";
import PPCLink from "./UI/PPCLink";
import PlaceholderImage from "./PlaceholderImage";
import CFP from "../assets/CFP.png";

import * as CONSTANTS from "../constants";
import classes from "./Projects.module.css";
import React from "react";

const Projects = () => {
  const [hoverState, setHoverState] = useState(null);

  const projects = [
    {
      title: "Crypto Flex Pixels",
      description:
        "Our first project to learn the ropes of Web3 and NFTs. Intended to be more of a community token where NFTs with higher boosts grant holders bigger benefits/rewards.",
      image: <img src={CFP} alt="Crypto Flex Pixels" />,
      linkText: "View Project",
      link: "https://www.cryptoflexpixels.com",
    },
    {
      title: "AI Project",
      description:
        "Using the power of AI we will be generating a variety of different artworks. There will be a different themes for a number of sub-projects within this project to keep things fresh and interesting.",
      image: <PlaceholderImage />,
      //   linkText: "View on OpenSea",
      link: "",
    },
    {
      title: "Interactive PFP",
      description:
        "We've got a fun concept planned that adds interactivity to your PFP and includes a unique avatar that hasn't been seen in the NFT space so far (i.e. not an ape, cat, etc.).",
      image: <PlaceholderImage />,
      //   linkText: "View on OpenSea",
      link: "",
    },
    {
      title: "Collaborations",
      description: (
        <React.Fragment>
          Interested in a collab? Send us a message on{" "}
          <PPCLink
            target={CONSTANTS.TWITTER}
            text="Twitter"
            type="external"
            styling={
              hoverState === "Collaborations"
                ? "descriptionHover"
                : "description"
            }
          />{" "}
          or{" "}
          <PPCLink
            target={CONSTANTS.DISCORD}
            text="Discord"
            type="external"
            styling={
              hoverState === "Collaborations"
                ? "descriptionHover"
                : "description"
            }
          />{" "}
          to discuss! Collab project NFTs will get boosted staking rewards.
        </React.Fragment>
      ),
      image: <PlaceholderImage />,
      linkText: "",
      link: "",
    },
  ];

  return (
    <div id="projects" className={classes.container}>
      <Section>
        <h1 className={classes.title}>Projects</h1>
        {projects.map((project, index) => {
          return (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              linkText={project.linkText}
              link={project.link}
              orientation={index % 2 ? "right" : ""}
              onMouseOver={() => setHoverState(project.title)}
              onMouseOut={() => setHoverState(null)}
            />
          );
        })}
      </Section>
    </div>
  );
};

export default Projects;
