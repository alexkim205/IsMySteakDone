import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../../components/Button.component";
import { Palm, Face } from "../../components/HoverMedia.component";

import { DonenessTypes } from "./questions";

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
      margin: 0 auto;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 250px;
      }
    }
    .choices {
      display: flex;
      justify-content: center;
      margin: 1em 0 2em 0;
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
  const [value, setValue] = useState(null);
  const { setup, prompt, img } = qInfo;

  const handleClick = (e, val) => {
    e.preventDefault();
    if (hasSubmitted) {
      return;
    }
    setValue(val);
    handleSubmit(val);
  };

  const handleButtonColor = (val) => {
    console.log(hasSubmitted, isCorrect, value);
    if (hasSubmitted) {
      if (val === value) {
        return isCorrect ? "success" : "failure";
      } else {
        return "disabled";
      }
    } else {
      return "choice";
    }
  };

  return (
    <Container>
      <div className="setup">{setup}</div>
      <div className="prompt">{prompt}</div>
      <div className="input">
        <div className="wrapper">
          <img src={img} alt="what-steak"></img>
        </div>
        <div className="choices">
          {Object.keys(DonenessTypes).map((done, i) => (
            <Button
              onClick={(e) => handleClick(e, done)}
              disabled={hasSubmitted}
              type={handleButtonColor(done)}
              key={i}
            >
              {done.replace("_", "-")}
            </Button>
          ))}
        </div>
      </div>
    </Container>
  );
};