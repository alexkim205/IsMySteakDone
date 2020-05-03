import React, { Fragment } from "react";

import TitleSection from "../../components/TitleSection.component";
import Section from "../../components/Section.component";
import { ButtonLink } from "../../components/Button.component";

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
        <ButtonLink to="/levels">The 4 Levels of Doneness</ButtonLink>
      </Section>
      <Section center last>
        <h2>How?</h2>
        <div className="flex-h">
          <ButtonLink to="/palm">The Palm Test</ButtonLink>
          <ButtonLink to="/face">The Face Test</ButtonLink>
          <ButtonLink to="/fist">The Fist Test</ButtonLink>
        </div>
      </Section>
    </Fragment>
  );
};

export default Home;
