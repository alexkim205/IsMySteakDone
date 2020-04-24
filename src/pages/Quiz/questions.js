import steakrare from "../../media/steak-rare.png";
import steakmediumrare from "../../media/steak-medium-rare.jpg";
import steakmedium from "../../media/steak-medium.jpg";
import steakwelldone from "../../media/steak-well-done.jpg";

export const QuestionTypes = {
  NUMBER: "NUMBER",
  TACTILE: "TACTILE",
  MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
};

export const TactileTypes = {
  FACE: "FACE",
  FIST: "FIST",
  PALM: "PALM",
};

export const DonenessTypes = {
  RARE: "RARE",
  MEDIUM_RARE: "MEDIUM_RARE",
  MEDIUM: "MEDIUM",
  WELL_DONE: "WELL_DONE",
};

export const FingerTypes = {
  INDEX: DonenessTypes.RARE,
  MIDDLE: DonenessTypes.MEDIUM_RARE,
  RING: DonenessTypes.MEDIUM,
  PINKY: DonenessTypes.PINKY,
};

export const FaceAreaTypes = {
  CHEEK: DonenessTypes.RARE,
  CHIN: DonenessTypes.MEDIUM_RARE,
  NOSE: DonenessTypes.MEDIUM,
  FOREHEAD: DonenessTypes.WELL_DONE,
};

export const FistTypes = {
  RELAXED: DonenessTypes.RARE,
  SQUEEZE: DonenessTypes.MEDIUM,
  CLENCH: DonenessTypes.WELL_DONE,
};

export const questions = [
  {
    id: "s1p1",
    name: "Scenario 1 Part 1",
    scenario: 1,
    part: 1,
    type: QuestionTypes.NUMBER,
    validate: (answer) => answer >= 3.5 && answer <= 4.5,
    correctFeedback:
      "Correct! A medium-rare steak should be seared for 3-4 minutes on each side on medium-high.",
    incorrectFeedback:
      "Incorrect. A medium-rare steak should be seared for 3-4 minutes on each side on medium-high.",
    qInfo: {
      setup:
        "You receive an order for a medium-rare ribeye. You’re given a 1 inch thick 8oz ribeye.",
      prompt: "How long should you sear each side of the steak?",
      suffix: "minutes",
    },
  },
  {
    id: "s1p2",
    name: "Scenario 1 Part 2",
    scenario: 1,
    part: 2,
    type: QuestionTypes.TACTILE,
    validate: (finger) => FingerTypes[finger] === DonenessTypes.MEDIUM_RARE,
    correctFeedback:
      "Correct! A medium-rare steak should be tested by connecting the thumb with the middle finger, and then feeling the palm area under your thumb.",
    incorrectFeedback:
      "Incorrect! A medium-rare steak should be tested by connecting the thumb with the middle finger, and then feeling the palm area under your thumb.",
    qInfo: {
      setup:
        "After searing, you have a nice golden brown steak. Congrats!\nIt looks nice on the outside, but you want to test if the steak really is medium-rare. You don’t want to puncture the steak with a thermometer, so you use the palm test.",
      prompt: "Click the finger you touch your thumb to.",
      media: TactileTypes.PALM,
    },
  },
  {
    id: "s1p3",
    name: "Scenario 1 Part 3",
    scenario: 1,
    part: 3,
    type: QuestionTypes.MULTIPLE_CHOICE,
    validate: (answer) => answer === DonenessTypes.RARE,
    correctFeedback:
      "Correct! A medium-rare steak should be tested by connecting the thumb with the middle finger, and then feeling the palm area under your thumb.",
    incorrectFeedback:
      "Incorrect! A medium-rare steak should be tested by connecting the thumb with the middle finger, and then feeling the palm area under your thumb.",
    qInfo: {
      setup:
        "After doing the palm test, it seems like your steak feels medium-rare. You send it off to the person who ordered it, but it’s returned to the kitchen with complaints that the steak isn’t done like they wanted. The cross-cut of the steak looks like this:",
      prompt: "From this image, can you tell how done the steak is?",
      img: steakrare,
    },
  },
  {
    id: "s2p1",
    name: "Scenario 2 Part 1",
    scenario: 2,
    part: 1,
    type: QuestionTypes.NUMBER,
    validate: (answer) => answer >= 0 && answer <= 2.5,
    correctFeedback:
      "Correct! A rare steak should be seared for 1-2 minutes on each side on medium-high.",
    incorrectFeedback:
      "Incorrect. A rare steak should be seared for 1-2 minutes on each side on medium-high.",
    qInfo: {
      setup:
        "You receive an order for a rare ribeye. You’re given a 1 inch thick 8oz ribeye.",
      prompt: "How long should you sear each side of the steak?",
      suffix: "minutes",
    },
  },
  {
    id: "s2p2",
    name: "Scenario 2 Part 2",
    scenario: 2,
    part: 2,
    type: QuestionTypes.TACTILE,
    validate: (faceArea) => FaceAreaTypes[faceArea] === DonenessTypes.RARE,
    correctFeedback:
      "Correct! A rare steak should be tested by comparing the feel of the steak with touching your cheek area.",
    incorrectFeedback:
      "Incorrect! A rare steak should be tested by comparing the feel of the steak with touching your cheek area.",
    qInfo: {
      setup:
        "After searing, you have a nice golden brown steak. Congrats!\nIt looks nice on the outside, but you want to test if the steak really is rare. You don’t want to puncture the steak with a thermometer, so you use the face test.",
      prompt: "Click the area of your face that you should feel.",
      media: TactileTypes.FACE,
    },
  },
  {
    id: "s2p3",
    name: "Scenario 2 Part 3",
    scenario: 2,
    part: 3,
    type: QuestionTypes.MULTIPLE_CHOICE,
    validate: (answer) => answer === DonenessTypes.MEDIUM,
    correctFeedback:
      "Correct! The customer is always right, it looks like your steak was a little overdone",
    incorrectFeedback:
      "Incorrect. The customer is always right, it looks like your steak was a little overdone.",
    qInfo: {
      setup:
        "After doing the palm test, it seems like your steak feels rare. You send it off to the person who ordered it, but it’s returned to the kitchen with complaints that the steak isn’t done like they wanted. The cross-cut of the steak looks like this:",
      prompt: "From this image, can you tell how done the steak is?",
      img: steakmedium,
    },
  },
];
