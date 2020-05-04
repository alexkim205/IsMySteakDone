import React, { Fragment } from "react";

import ScrollingPageTemplate from "../ScrollingPageTemplate";
import Section from "../../components/Section.component";
import { ButtonLink } from "../../components/Button.component";

import fistrare from "../../media/fist-rare.jpeg";
import fistmedium from "../../media/fist-medium.jpeg";
import fistwelldone from "../../media/fist-well-done.jpeg";
import steakrare from "../../media/steak-rare.png";
import steakmedium from "../../media/steak-medium.jpg";
import steakwelldone from "../../media/steak-well-done.jpg";

const tests = [
  {
    id: "what",
    name: "What?",
    text: (
      <Fragment>
        <p>
          Well-done for getting up to this point! Like the other tests, the fist
          test is another simple "body-feel" test:
        </p>
        <mark>
          <ol>
            <li>Make a relaxed fist.</li>
            <li>
              Depending on your preferred level of doneness, make a relaxed,
              squeezed or clenched fist.
            </li>
            <li>
              Feel the fleshy part of your hand between your index finger and
              thumb using your other hand. This should be how the steak should
              feel like.
            </li>
          </ol>
        </mark>
        <p>Didn't follow? That's okay! The pictures below should be of help.</p>
      </Fragment>
    ),
  },
  {
    id: "rare",
    name: "Rare",
    img: fistrare,
    img2: steakrare,
  },
  {
    id: "medium",
    name: "Medium",
    img: fistmedium,
    img2: steakmedium,
  },
  {
    id: "well-done",
    name: "Well-Done",
    img: fistwelldone,
    img2: steakwelldone,
  },
];

const Fist = () => (
  <ScrollingPageTemplate
    title={"The Fist Test"}
    subtitle={"No, you don't punch your steak."}
    sections={tests}
    bottomButtons={
      <Section center last>
        <h2>Think you got what it takes?</h2>
        <div className="flex-h">
          <ButtonLink to="/cheat-sheet">Cheat Sheet</ButtonLink>
          <ButtonLink to="/quiz/start">Quiz Yourself</ButtonLink>
        </div>
      </Section>
    }
  />
);

export default Fist;
