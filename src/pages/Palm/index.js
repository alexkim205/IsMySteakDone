import React, { Fragment } from "react";

import ScrollingPageTemplate from "../ScrollingPageTemplate";
import Section from "../../components/Section.component";
import { ButtonLink } from "../../components/Button.component";

import palmrare from "../../media/palm-rare.png";
import palmmediumrare from "../../media/palm-medium-rare.png";
import palmmedium from "../../media/palm-medium.png";
import palmwelldone from "../../media/palm-well-done.png";
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
          Now that you've learned about the different levels of doneness, you
          may be wondering how to check the doneness. Let's say you don't have a
          meat thermometer laying around (who really does?) and you don't want
          to cut your steak to check the color because it will let all the
          juices out. The palm test allows you to use your hand as a benchmark
          for testing the "feel" of the steak:
        </p>
        <mark>
          <ol>
            <li>Relax your hand.</li>
            <li>Relax.</li>
            <li>
              Gently press touch the tip of your thumb against the specified
              finger. See the sections below for which finger to use.
            </li>
            <li>
              Place your index finger on your other hand on the fleshy part
              between the thumb and the base of your palm. This is what the
              outside of the steak should feel like.
            </li>
            <li>
              Oh, did I mention that you should make sure to relax your hand?
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
    img: palmrare,
    img2: steakrare,
  },
  {
    id: "medium-rare",
    name: "Medium-Rare",
    img: palmmediumrare,
    img2: steakmediumrare,
  },
  {
    id: "medium",
    name: "Medium",
    img: palmmedium,
    img2: steakmedium,
  },
  {
    id: "well-done",
    name: "Well-Done",
    img: palmwelldone,
    img2: steakwelldone,
  },
];

const Palm = () => (
  <ScrollingPageTemplate
    title={"The Palm Test"}
    subtitle={"Testing doneness in the power of your palm."}
    sections={tests}
    bottomButtons={
      <Section center last>
        <h2>One down, two to go.</h2>
        <div className="flex-h">
          <ButtonLink to="/face">The Face Test</ButtonLink>
          <ButtonLink to="/fist">The Fist Test</ButtonLink>
        </div>
      </Section>
    }
  />
);

// <small style={{ color: "salmon" , fontSize: "0.01em"}}>
// If your palm is bigger than your face, you might have cancer.
// </small>

export default Palm;
