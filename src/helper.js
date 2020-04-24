/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";
import styledBreakpoint from "@humblebee/styled-components-breakpoint";

import { questions } from "./pages/Quiz/questions";

// Creates an object with breakpoint utility methods.
export const breakpoints = {
  xxs: 0,
  xs: 320,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
};
export const breakpoint = styledBreakpoint(breakpoints);

export const calculateAdditionalHeight = (ref) => {
  if (!ref || !ref.current) return 0;

  const topOfLastSection =
    ref.current.getBoundingClientRect().top + window.scrollY;
  const pageScrollNeeded = document.body.scrollHeight - topOfLastSection;
  const offsetNeeded = window.innerHeight - pageScrollNeeded + 100;
  if (offsetNeeded > 0) {
    return offsetNeeded;
  }
  return 0;
};

export const lorem = new LoremIpsum();

export const scrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const getPrevAndNextQuestionPageRoute = () => {
  const PARTS_PER_SCENARIO = 3;
  const NUM_OF_SCENARIO = 3;
  const num_questions = questions.length;
  const { pathname } = useLocation();
  const { scenario, part } = useParams();

  const getNext = () => {
    if (pathname === "/quiz/start") {
      return "/quiz/1/1";
    } else if (pathname === "/quiz/end") {
      return null;
    } else {
      if (!scenario || !part) {
        return null;
      }
      const next_idx =
        (parseInt(scenario) - 1) * PARTS_PER_SCENARIO + parseInt(part);

      if (next_idx === num_questions) {
        // Current question is last one
        return "/quiz/end";
      } else {
        return `/quiz/${questions[next_idx].scenario}/${questions[next_idx].part}`;
      }
    }
  };

  const getPrev = () => {
    if (pathname === "/quiz/1/1") {
      return "/quiz/start";
    } else if (pathname === "/quiz/end") {
      return `quiz/${NUM_OF_SCENARIO}/${PARTS_PER_SCENARIO}`;
    } else {
      if (!scenario || !part) {
        return null;
      }
      const curr_idx =
        (parseInt(scenario) - 1) * PARTS_PER_SCENARIO + parseInt(part) - 1;

      if (curr_idx === 0) {
        // Current question is first one
        return "/quiz/start";
      } else {
        return `/quiz/${questions[curr_idx - 1].scenario}/${
          questions[curr_idx - 1].part
        }`;
      }
    }
  };

  return [getPrev(), getNext()];
};

export const handleButtonColor = (val, refVal, hasSubmitted, isCorrect) => {
  if (hasSubmitted) {
    if (val === refVal) {
      return isCorrect ? "success" : "failure";
    } else {
      return "disabled";
    }
  } else {
    return "choice";
  }
};

export const redirectQuiz = () => {
  const history = useHistory();
  const location = useLocation();

  // Redirects to resume quiz progress last unanswered question.
  const cachedProgress = JSON.parse(localStorage.getItem("quiz_progress"));
  if (!cachedProgress) {
    // Quiz hasn't started
    if (location.pathname !== "/quiz/start") {
      history.push(`/quiz/start`);
    }
    return;
  }
  const {
    isQuizFinished,
    lastUnansweredQuestion: { scenario: lastScenario, part: lastPart },
  } = cachedProgress;
  if (isQuizFinished) {
    if (location.pathname !== "/quiz/end") {
      history.push(`/quiz/end`);
    }
  } else {
    history.push(`/quiz/${lastScenario}/${lastPart}`);
  }
};

export const SCROLL_WIDTH = 7;