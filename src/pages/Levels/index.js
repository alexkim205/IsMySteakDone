import React, { Fragment } from "react";
import { lorem } from "../../helper";

import ScrollingPageTemplate from "../ScrollingPageTemplate";
import Section from "../../components/Section.component";
import Button from "../../components/Button.component";

const levels = [
  {
    id: "rare",
    name: "Rare",
    img: "https://dummyimage.com/400x300/757575/ffffff",
    text: lorem.generateSentences(3),
  },
  {
    id: "medium-rare",
    name: "Medium-Rare",
    img: "https://dummyimage.com/400x300/757575/ffffff",
    text: lorem.generateSentences(3),
  },
  {
    id: "medium",
    name: "Medium",
    img: "https://dummyimage.com/400x300/757575/ffffff",
    text: lorem.generateSentences(3),
  },
  {
    id: "well-done",
    name: "Well-Done",
    img: "https://dummyimage.com/400x300/757575/ffffff",
    text: lorem.generateSentences(3),
  },
];

const Levels = () => (
  <Fragment>
    <ScrollingPageTemplate
      title={"The 4 Levels of Doneness"}
      subtitle={"Which one do you prefer?"}
      sections={levels}
      bottomButtons={
        <Section center>
          <h2>Next, learn how to test doneness.</h2>
          <div className="flex-h">
            <Button to="/palm">The Palm Test</Button>
            <Button to="/face">The Face Test</Button>
            <Button to="/fist">The Fist Test</Button>
          </div>
        </Section>
      }
    />
  </Fragment>
);

export default Levels;
