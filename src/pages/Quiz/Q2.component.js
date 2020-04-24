import React from "react";
import styled from "styled-components";

import { Button } from "../../components/Button.component";
import { Palm, Face } from "../../components/HoverMedia.component";

import { TactileTypes } from "./questions";

const Container = styled.div`
  width: 100%;

  .setup {
  }
  .prompt {
    font-weight: bold;
    margin: 2em auto 1em auto;
  }
  .input {
    margin-top: 2em;
    box-sizing: border-box;

    .value {
      text-align: center;
      margin-bottom: 2em;
      color: black;

      span.bold {
        font-size: 2em;
        font-weight: bold;
        color: black;
      }
    }

    .wrapper {
      box-sizing: border-box;
      margin: 0 auto 2em auto;
      
      /* height: 400px; */
    }
  }

  .buttons,
  .feedback {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
  }
`;

export default ({ qInfo, hasSubmitted, handleSubmit, isCorrect }) => {
  const { setup, prompt, media } = qInfo;

  const renderType = () => {
    if (media === TactileTypes.PALM) {
      return <Palm hasSubmitted={hasSubmitted} handleSubmit={handleSubmit} isCorrect={isCorrect}/>;
    } else if (media === TactileTypes.FACE) {
      return <Face hasSubmitted={hasSubmitted} handleSubmit={handleSubmit} isCorrect={isCorrect} />;
    } else if (media ===TactileTypes.FIST) {
      return; // implement
    }
  };

  return (
    <Container>
      <div className="setup">{setup}</div>
      <div className="prompt">{prompt}</div>
      <div className="input">
        <div className="wrapper">{renderType()}</div>
      </div>
      {/* {!hasSubmitted && (
        <div className="buttons">
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(value);
            }}
          >
            Submit
          </Button>
        </div>
      )} */}
    </Container>
  );
};
