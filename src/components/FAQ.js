import FAQItem from "./FAQItem";
import Section from "./Layout/Section";
import PPCLink from "./UI/PPCLink";

import * as CONSTANTS from "../constants";

import classes from "./FAQ.module.css";

const FAQ = () => {
  const FAQList = [
    {
      title: "I'm new to crypto/NFTs. Do you have a guide?",
      description: (
        <p>
          We've put together a helpful guide to aid with onboarding people new
          to crypto and/or new to NFTs. The guide includes detailed walkthroughs
          with screenshots and is broken down into sections to make things easy
          to find! You don't have to read it all at once, but give it a shot
          sometime as there's lots of helpful tricks to save money and keep your
          account secure! You can find{" "}
          <PPCLink
            target="https://medium.com/@jo.blaszak/cryptocurrencies-general-knowledge-and-buying-nfts-9a0ce596b9bd#0fbb"
            text="our crypto/NFT guide here"
            type="external"
          />
          .
        </p>
      ),
    },
    {
      title: "How much is a Perfect Pixels Club NFT?",
      description: `The price of each NFT will depend on the project and the stage the project is in.
      As of now all projects will be minting using $MATIC tokens. These are the native tokens on the 
      Polygon network.  In the future we plan to have our own ERC-20 token for some special mints/bonuses.
      Secondary sales are subject to that marketplace's specific tokens. For Opensea, this will be $WETH.`,
    },
    {
      title: "How do I get $MATIC?",
      description: (
        <p>
          Check the appropriate section in{" "}
          <PPCLink
            target="https://medium.com/@jo.blaszak/cryptocurrencies-general-knowledge-and-buying-nfts-9a0ce596b9bd"
            text="our buying crypto guide here"
            type="external"
          />
          .
        </p>
      ),
    },
    {
      title: "Where can I find my NFT after I purchase it?",
      description: (
        <p>
          Your NFT can be found on the OpenSea website once you connect your
          wallet and view your profile. You can view your{" "}
          <PPCLink
            target="https://opensea.io/account"
            text="OpenSea profile here"
            type="external"
          />
          .
        </p>
      ),
    },
    {
      title: "Why are your projects on the Polygon network?",
      description: `Our projects are located on the Polygon (MATIC) network because of the low gas fees. This
        way more of your money can go towards supporting artists and building up your collection.
        It also allows us to deploy contracts that wouldn't be possible due to cost constraints on
        the Ethereum network.`,
    },
    {
      title: "How can I do a collaboration with Perfect Pixels Club?",
      description: (
        <p>
          We're open to doing collaborations with other projects. If you've got
          a fun idea or concept and would like to do a collab with us, the best
          way would be to get in touch with us through{" "}
          <PPCLink target={CONSTANTS.TWITTER} text="Twitter" type="external" />{" "}
          or through{" "}
          <PPCLink target={CONSTANTS.DISCORD} text="Discord" type="external" />.
          All collab projects will be posted/created on our custom collab
          marketplace/contract.
        </p>
      ),
    },
  ];
  return (
    <Section>
      <h1 className={classes.title}>FAQ</h1>
      <div className={classes.FAQList}>
        {FAQList.map((item) => {
          return (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default FAQ;
