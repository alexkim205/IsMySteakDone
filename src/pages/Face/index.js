import React, { Fragment } from "react";

import ScrollingPageTemplate from "../ScrollingPageTemplate";
import Section from "../../components/Section.component";
import { ButtonLink } from "../../components/Button.component";

import facerare from "../../media/face-rare.jpeg";
import facemediumrare from "../../media/face-medium-rare.jpeg";
import facemedium from "../../media/face-medium.jpeg";
import facewelldone from "../../media/face-well-done.jpeg";
import steakrare from "../../media/steak-rare.png";
import steakmediumrare from "../../media/steak-medium-rare.jpg";
import steakmedium from "../../media/steak-medium.jpg";
import steakwelldone from "../../media/steak-well-done.jpg";

const tests = [
  {
    id: "what",
    name: "What?",
    text: (
      <Fragment>
        <p>
          Similar to the palm test, the face test involves touching different
          parts of your face and comparing it to how the steak feels.
        </p>
        <mark>
          <ol>
            <li>Relax your face.</li>
            <li>
              Use one hand to feel the specified part of your face. See the
              sections below for which part to feel.
            </li>
            <li>
              Use the other hand to feel the steak. You should feel
              approximately the same thing with both hands.
            </li>
            <li>Channel your inner DJ.</li>
          </ol>
        </mark>
        <p>Didn't follow? That's okay! The pictures below should be of help.</p>
      </Fragment>
    ),
  },
  {
    id: "rare",
    name: "Rare",
    img: facerare,
    img2: steakrare,
  },
  {
    id: "medium-rare",
    name: "Medium-Rare",
    img: facemediumrare,
    img2: steakmediumrare,
  },
  {
    id: "medium",
    name: "Medium",
    img: facemedium,
    img2: steakmedium,
  },
  {
    id: "well-done",
    name: "Well-Done",
    img: facewelldone,
    img2: steakwelldone,
  },
];

const Face = () => (
  <ScrollingPageTemplate
    title={"The Face Test"}
    subtitle={"Time to face the consequences of your cooking."}
    sections={tests}
    bottomButtons={
      <Section center last>
        <h2>Last, but not least.</h2>
        <div className="flex-h">
          <ButtonLink to="/fist">The Fist Test</ButtonLink>
        </div>
      </Section>
    }
  />
);

export default Face;
