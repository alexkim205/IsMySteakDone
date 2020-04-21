import React from "react";
import { lorem } from "../../helper";

import ScrollingPageTemplate from "../ScrollingPageTemplate";

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

const Fist = () => (
  <ScrollingPageTemplate
    title={"The Fist Test"}
    subtitle={"No, you don't punch your steak."}
    sections={tests}
  />
);

export default Fist;
