import Section from "./Layout/Section";
import Project from "./Project";
import CFP from "../assets/CFP.png";

import * as CONSTANTS from "../constants";
import classes from "./Projects.module.css";

const Projects = () => {
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
      image: (
        <div
          style={{
            display: "flex",
            minHeight: "300px",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10rem",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
        >
          ?
        </div>
      ),
      //   linkText: "View on OpenSea",
      link: "",
    },
    {
      title: "Interactive PFP",
      description:
        "We've got a fun concept planned that adds interactivity to your PFP and includes a unique avatar that hasn't been seen in the NFT space so far (i.e. not an ape, cat, etc.).",
      image: (
        <div
          style={{
            display: "flex",
            minHeight: "300px",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10rem",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
        >
          ?
        </div>
      ),
      //   linkText: "View on OpenSea",
      link: "",
    },
    {
      title: "Collab Marketplace",
      description: (
        <p>
          Interested in a collab? Send us a message on{" "}
          <a
            href={CONSTANTS.TWITTER}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            Twitter
          </a>{" "}
          or{" "}
          <a
            href={CONSTANTS.DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            Discord
          </a>
          ! We've set up a custom smart contract with a payment splitter so both
          sides are fairly compensated! (Initial sales only)
        </p>
      ),
      image: (
        <div
          style={{
            display: "flex",
            minHeight: "300px",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10rem",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
        >
          ?
        </div>
      ),
      linkText: "COMING SOON",
      link: "",
    },
  ];

  return (
    <div className={classes.container}>
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
            />
          );
        })}
      </Section>
    </div>
  );
};

export default Projects;
