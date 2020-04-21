import React, {Fragment} from "react";

import TitleSection from "../../components/TitleSection.component";
import Section from "../../components/Section.component";
import Button from "../../components/Button.component";

const Fist = () => {
  return (
    <Fragment>
      <TitleSection>
        <h1>The Fist Test</h1>
        <p>No, you don't punch your steak.</p>
      </TitleSection>
      {/* <Section>
        <h2>What?</h2>
        <Button to="/levels">The 4 Levels of Doneness</Button>
      </Section> */}
    </Fragment>
  );
};

export default Fist;
