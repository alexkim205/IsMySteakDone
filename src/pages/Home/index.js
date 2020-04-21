import React, { Fragment } from "react";

import TitleSection from "../../components/TitleSection.component";
import Section from "../../components/Section.component";
import Button from "../../components/Button.component";

const Home = () => {
  return (
    <Fragment>
      <TitleSection>
        <h1>How to Cook Steak Right</h1>
        <p>
          Learn how to cook a cut of steak at different levels of doneness using
          only your body.
        </p>
      </TitleSection>
      <Section center>
        <h2>What?</h2>
        <Button to="/levels">The 4 Levels of Doneness</Button>
      </Section>
      <Section center>
        <h2>How?</h2>
        <div className="flex-h">
          <Button to="/palm">The Palm Test</Button>
          <Button to="/face">The Face Test</Button>
          <Button to="/fist">The Fist Test</Button>
        </div>
      </Section>
    </Fragment>
  );
};

export default Home;
