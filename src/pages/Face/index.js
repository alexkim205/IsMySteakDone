import React from "react";
import { lorem } from "../../helper";

import ScrollingPageTemplate from "../ScrollingPageTemplate";
import Section from "../../components/Section.component";
import {ButtonLink} from "../../components/Button.component";

const tests = [
  {
    id: "what",
    name: "What?",
    text: lorem.generateSentences(5),
  },
  {
    id: "rare",
    name: "Rare",
    img: "https://dummyimage.com/400x300/757575/ffffff",
    img2: "https://dummyimage.com/400x300/757575/ffffff",
  },
  {
    id: "medium-rare",
    name: "Medium-Rare",
    img: "https://dummyimage.com/400x300/757575/ffffff",
    img2: "https://dummyimage.com/400x300/757575/ffffff",
  },
  {
    id: "medium",
    name: "Medium",
    img: "https://dummyimage.com/400x300/757575/ffffff",
    img2: "https://dummyimage.com/400x300/757575/ffffff",
  },
  {
    id: "well-done",
    name: "Well-Done",
    img: "https://dummyimage.com/400x300/757575/ffffff",
    img2: "https://dummyimage.com/400x300/757575/ffffff",
  },
];

const Face = () => (
  <ScrollingPageTemplate
    title={"The Face Test"}
    subtitle={"Time to face the consequences of your cooking."}
    sections={tests}
    bottomButtons={
      <Section center>
        <h2>Last, but not least.</h2>
        <div className="flex-h">
          <ButtonLink to="/fist">The Fist Test</ButtonLink>
        </div>
      </Section>
    }
  />
);

export default Face;
