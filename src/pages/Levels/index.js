import React, { Fragment } from "react";

import ScrollingPageTemplate from "../ScrollingPageTemplate";
import Section from "../../components/Section.component";
import { ButtonLink } from "../../components/Button.component";

import steakrare from "../../media/steak-rare.png";
import steakmediumrare from "../../media/steak-medium-rare.jpg";
import steakmedium from "../../media/steak-medium.jpg";
import steakwelldone from "../../media/steak-well-done.jpg";

const levels = [
  {
    id: "what",
    name: "What?",
    text: (
      <Fragment>
        <p>
          If you've ever ordered steak at a restaurant, you might've been asked
          how you would like your steak done. If you were anything like me, you
          would've stuttered and bumbled your way into a well-done because all
          you wanted was your steak to be done...well! To avoid any future
          awkward mishaps, lets compare the four different levels of steak
          doneness:
        </p>
        <ol>
          <li>Rare</li>
          <li>Medium-Rare</li>
          <li>Medium</li>
          <li>Well-Done</li>
        </ol>
        <p>
          Each of these refers to the internal temperature that a steak can
          reach, and it can affect the texture, flavor, and juiciness of the
          steak. So how do they differ?
        </p>
      </Fragment>
    ),
  },
  {
    id: "rare",
    name: "Rare",
    img: steakrare,
    text: (
      <Fragment>
        <p>
          Internal temperature of <mark>125-130°F</mark>.
        </p>
        <p>
          <mark>Warm</mark>, <mark>red</mark> or <mark>pink</mark> center.
        </p>
        <p>
          <mark>Soft</mark>, <mark>spongy</mark>, and{" "}
          <mark>slight resistance to touch</mark>.
        </p>
        <p>
          Sear each side for <mark>1-2.5 minutes</mark>.
        </p>
        <p>Great for eating lean cuts with lower fat content like sirloin.</p>
      </Fragment>
    ),
  },
  {
    id: "medium-rare",
    name: "Medium-Rare",
    img: steakmediumrare,
    text: (
      <Fragment>
        <p>
          Internal temperature of <mark>130-140°F</mark>.
        </p>
        <p>
          <mark>Red</mark> center.
        </p>
        <p>
          <mark>Soft</mark>, <mark>spongy</mark>, and{" "}
          <mark>slightly springy</mark>.
        </p>
        <p>
          Sear each side for <mark>3-4 minutes</mark>.
        </p>
        <p>
          Considered by many to be the juiciest and most flavorful way to cook
          your steak. New York Strip and Filet Mignon cuts are often served
          medium-rare.
        </p>
      </Fragment>
    ),
  },
  {
    id: "medium",
    name: "Medium",
    img: steakmedium,
    text: (
      <Fragment>
        <p>
          Internal temperature of <mark>140-155°F</mark>.
        </p>
        <p>
          <mark>Slightly pink</mark> center.
        </p>
        <p>
          <mark>Firm</mark> and <mark>springy</mark>.
        </p>
        <p>
          Sear each side for <mark>4-5 minutes</mark>.
        </p>
        <p>
          The USDA recommended level of doneness for raw beef. T-bone steaks are
          usually served medium.
        </p>
      </Fragment>
    ),
  },
  {
    id: "well-done",
    name: "Well-Done",
    img: steakwelldone,
    text: (
      <Fragment>
        <p>
          Internal temperature of <mark>155+°F</mark>.
        </p>
        <p>
          <mark>Pink-brown</mark> center.
        </p>
        <p>
          <mark>Very firm</mark> and <mark>springs back easily</mark>.
        </p>
        <p>
          Sear each side for <mark>6-8 minutes</mark>.
        </p>
        <p>
          The steak is dry and tough, with very little fat left over. Perfect
          for people with strong canine teeth, but generally not recommended for
          most people.
        </p>
      </Fragment>
    ),
  },
];

const Levels = () => (
  <Fragment>
    <ScrollingPageTemplate
      title={"The 4 Levels of Doneness"}
      subtitle={"Which one do you prefer?"}
      sections={levels}
      bottomButtons={
        <Section center last>
          <h2>Next, learn how to test doneness.</h2>
          <div className="flex-h">
            <ButtonLink to="/palm">The Palm Test</ButtonLink>
            <ButtonLink to="/face">The Face Test</ButtonLink>
            <ButtonLink to="/fist">The Fist Test</ButtonLink>
          </div>
        </Section>
      }
    />
  </Fragment>
);

export default Levels;
