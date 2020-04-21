import React, { Fragment } from "react";

import TitleSection from "../../components/TitleSection.component";
import Section from "../../components/Section.component";
import Button from "../../components/Button.component";

const Quiz = () => {
  return (
    <Fragment>
      <TitleSection>
        <h1>Quiz</h1>
        <p>No pressure, only your pride is at steak!</p>
      </TitleSection>
      {/* <Section>
        <h2>What?</h2>
        <Button to="/levels">The 4 Levels of Doneness</Button>
      </Section> */}
    </Fragment>
  );
};

export default Quiz;
