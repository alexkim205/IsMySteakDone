import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { Link, useParams } from "react-router-dom";

import { questions } from "./questions";
import { SCROLL_WIDTH } from "../../helper";

const Container = styled.div`
  height: 100%;

  h3 {
    padding-left: calc(${SCROLL_WIDTH}px + 1rem);
  }

  .vertical-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    background: white;
    /* border-bottom: 1px solid black; */
    border-left: 1px solid black;
    top: 50px !important;
  }
`;

const HeaderBase = styled.div`
  ${({ active }) => {
    if (active) {
      return css`
        color: black;
        /* font-weight: bold; */
      `;
    } else {
      return css`
        color: gray;
      `;
    }
  }}
`;

const ScenarioHeader = styled(HeaderBase)`
  font-size: 1em;
  padding: 1rem 1rem 0.5rem 1rem;
`;
const PartHeader = styled(HeaderBase)`
  font-size: 0.9em;
  padding: 0.25rem 0 0.25rem 2.1em;
`;

const QuestionLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  ${({ hasSubmitted, isCorrect }) => {
    if (!hasSubmitted) {
      return css`
          /* border-left: ${SCROLL_WIDTH}px solid transparent; */
        `;
    }
    if (isCorrect) {
      return css`
        box-shadow: inset 0 -3px 0 -1px #24de89;
      `;
    }
    return css`
      box-shadow: inset 0 -3px 0 -1px #ff6961;
    `;
  }};
`;

const QuizScrollbar = () => {
  const { scenario: currScenario, part: currPart } = useParams();

  return (
    <Container>
      <h3>Quiz Progress</h3>
      <div className="vertical-container">
        <div className="info">
          {questions &&
            questions.map(({ scenario, part }, i) => {
              const cachedQProgress = JSON.parse(
                localStorage.getItem(`s${scenario}p${part}`)
              );
              const hasSubmitted = !!cachedQProgress?.hasSubmitted;
              const isCorrect = !!cachedQProgress?.isCorrect;
              return (
                <Fragment>
                  {part === 1 && (
                    <ScenarioHeader
                      active={scenario === parseInt(currScenario)}
                      // hasSubmitted={hasSubmitted}
                      hasSubmitted={false} // don't highlight
                      isCorrect={isCorrect}
                    >
                      Scenario {scenario}
                    </ScenarioHeader>
                  )}
                  <PartHeader
                    active={
                      scenario === parseInt(currScenario) &&
                      part === parseInt(currPart)
                    }
                    hasSubmitted={hasSubmitted}
                    isCorrect={isCorrect}
                  >
                    {hasSubmitted ? (
                      <QuestionLink
                        to={hasSubmitted ? `/quiz/${scenario}/${part}` : null}
                        hasSubmitted={hasSubmitted}
                        isCorrect={isCorrect}
                      >
                        Question {part}
                      </QuestionLink>
                    ) : (
                      <Fragment>Question {part}</Fragment>
                    )}
                  </PartHeader>
                </Fragment>
              );
            })}
        </div>
      </div>
    </Container>
  );
};

export default QuizScrollbar;
