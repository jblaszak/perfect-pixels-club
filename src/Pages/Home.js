import React, { Suspense } from "react";

import Pixels from "../components/Pixels";
import About from "../components/About";
import Hero from "../components/Hero";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Community from "../components/Community";
import Roadmap from "../components/Roadmap";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <React.Fragment>
      <Pixels />
      <Hero />
      <About />
      <Projects />
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Community />
        <Roadmap />
        <FAQ />
      </Suspense>
    </React.Fragment>
  );
};

export default Home;
