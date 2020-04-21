import React from "react";
import { lorem } from "../../helper";

import ScrollingPageTemplate from "../ScrollingPageTemplate";
import Section from "../../components/Section.component";
import Button from "../../components/Button.component";

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

const Palm = () => (
  <ScrollingPageTemplate
    title={"The Palm Test"}
    subtitle={"Testing doneness in the power of your palm."}
    sections={tests}
    bottomButtons={
      <Section center>
        <h2>One down, two to go.</h2>
        <div className="flex-h">
          <Button to="/face">The Face Test</Button>
          <Button to="/fist">The Fist Test</Button>
        </div>
      </Section>
    }
  />
);

// <small style={{ color: "salmon" , fontSize: "0.01em"}}>
// If your palm is bigger than your face, you might have cancer.
// </small>

export default Palm;
