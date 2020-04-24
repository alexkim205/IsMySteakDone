import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";

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
    background: lightsteelblue;
    top: 50px !important;
  }
`;

const HeaderBase = styled.div`

  ${({ hasSubmitted, isCorrect }) => {
    if (!hasSubmitted) {
      return css`
        border-left: ${SCROLL_WIDTH}px solid transparent;
      `;
    }
    if (isCorrect) {
      return css`
        border-left: ${SCROLL_WIDTH}px solid green;
      `;
    }
    return css`
      border-left: ${SCROLL_WIDTH}px solid red;
    `;
  }};
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
                    Question {part}
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
