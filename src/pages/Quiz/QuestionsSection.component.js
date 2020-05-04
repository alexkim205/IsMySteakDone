import React, { Fragment, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { getPrevAndNextQuestionPageRoute } from "../../helper";
import { QuestionTypes, questions } from "./questions";
import { Button } from "../../components/Button.component";
import Section from "../../components/Section.component";
import Q1 from "./Q1.component";
import Q2 from "./Q2.component";
import Q3 from "./Q3.component";

const Container = styled(Section)`
  .buttons,
  .feedback {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 1em 0;
    /* height: 1em; */
  }
`;

const Feedback = styled.span`
  color: ${({ right }) => (right ? "#1bb46e" : "#ff311f")};
  font-weight: bold;
`;

const QuestionSection = () => {
  const { scenario, part } = useParams();
  const history = useHistory();

  const currQ = questions.find(
    (q) => q.scenario === parseInt(scenario) && q.part === parseInt(part)
  );
  const [prevRoute, nextRoute] = getPrevAndNextQuestionPageRoute();

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const { type, validate, correctFeedback, incorrectFeedback, qInfo } = currQ;

  useEffect(() => {
    // Check localstorage to see if q has already been submitted, if so populate hasSubmitted and isCorrect
    const cachedData = JSON.parse(localStorage.getItem(`s${scenario}p${part}`));
    if (!cachedData) return;
    setHasSubmitted(cachedData.hasSubmitted);
    setIsCorrect(cachedData.isCorrect);
  }, [part, scenario]);

  const handleSubmit = (selectedVal) => {
    setHasSubmitted(true);
    const isCorrect = validate(selectedVal);
    setIsCorrect(isCorrect); // verify

    localStorage.setItem(
      `s${scenario}p${part}`,
      JSON.stringify({ hasSubmitted: true, isCorrect, selectedVal })
    );

    localStorage.setItem(
      `quiz_progress`,
      JSON.stringify({
        lastUnansweredQuestion: { scenario, part },
        isQuizFinished: nextRoute === "/quiz/end",
      })
    );
  };

  const renderQuestionType = () => {
    if (type === QuestionTypes.NUMBER) {
      return (
        <Q1
          qInfo={qInfo}
          hasSubmitted={hasSubmitted}
          handleSubmit={handleSubmit}
          isCorrect={isCorrect}
        />
      );
    } else if (type === QuestionTypes.TACTILE) {
      return (
        <Q2
          qInfo={qInfo}
          hasSubmitted={hasSubmitted}
          handleSubmit={handleSubmit}
          isCorrect={isCorrect}
        />
      );
    } else if (type === QuestionTypes.MULTIPLE_CHOICE) {
      return (
        <Fragment>
          <Q3
            qInfo={qInfo}
            hasSubmitted={hasSubmitted}
            handleSubmit={handleSubmit}
            isCorrect={isCorrect}
          />
        </Fragment>
      );
    }
  };

  return (
    <Container>
      <h2>
        Question {scenario}.{part}
      </h2>
      {renderQuestionType()}
      <div className="feedback">
        {hasSubmitted && (
          <Feedback right={isCorrect}>
            {isCorrect ? correctFeedback : incorrectFeedback}
          </Feedback>
        )}
      </div>
      <div className="buttons">
        {prevRoute !== "/quiz/start" && ( // if first question, don't show previous button
          <Button
            icon
            onClick={() => {
              history.push(prevRoute);
            }}
          >
            <IoIosArrowBack />
          </Button>
        )}
        {hasSubmitted && (
          <Button
            icon={nextRoute !== "/quiz/end"}
            onClick={() => {
              setHasSubmitted(false);
              setIsCorrect(false);
              history.push(nextRoute);
            }}
          >
            {nextRoute === "/quiz/end" ? "Finish" : <IoIosArrowForward />}
          </Button>
        )}
      </div>
    </Container>
  );
};

export default QuestionSection;
