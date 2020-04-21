import React, { Fragment } from "react";

import TitleSection from "../../components/TitleSection.component";
import Section from "../../components/Section.component";
import Button from "../../components/Button.component";

const Palm = () => {
  return (
    <Fragment>
      <TitleSection>
        <h1>The Palm Test</h1>
        <p>Testing doneness in the power of your palm.</p>
      </TitleSection>
      {/* <Section>
        <h2>What?</h2>
        <Button to="/levels">The 4 Levels of Doneness</Button>
      </Section> */}
    </Fragment>
  );
};

export default Palm;
