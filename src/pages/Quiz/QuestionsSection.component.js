import React, { Fragment, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import { getNextQuestionPageRoute } from "../../helper";
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
  color: ${({ right }) => (right ? "green" : "red")};
  font-weight: bold;
`;

const QuestionSection = () => {
  const { scenario, part } = useParams();
  const history = useHistory();

  const currQ = questions.find(
    (q) => q.scenario === parseInt(scenario) && q.part === parseInt(part)
  );
  const nextRoute = getNextQuestionPageRoute();

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const { type, validate, correctFeedback, incorrectFeedback, qInfo } = currQ;

  const handleSubmit = (val) => {
    setHasSubmitted(true);
    setIsCorrect(validate(val)); // verify
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
      <div className="buttons">
        {hasSubmitted && (
          <Button
            onClick={() => {
              setHasSubmitted(false);
              setIsCorrect(false);
              history.push(nextRoute);
            }}
          >
            Next
          </Button>
        )}
      </div>
      <div className="feedback">
        {hasSubmitted && (
          <Feedback right={isCorrect}>
            {isCorrect ? correctFeedback : incorrectFeedback}
          </Feedback>
        )}
      </div>
    </Container>
  );
};

export default QuestionSection;
