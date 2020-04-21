import React, { Fragment } from "react";

import TitleSection from "../../components/TitleSection.component";
import Section from "../../components/Section.component";
import Button from "../../components/Button.component";

const Face = () => {
  return (
    <Fragment>
      <TitleSection>
        <h1>The Face Test</h1>
        <p>Time to face the consequences of your cooking.</p>
      </TitleSection>
      {/* <Section>
        <h2>What?</h2>
        <Button to="/levels">The 4 Levels of Doneness</Button>
      </Section> */}
    </Fragment>
  );
};

export default Face;
