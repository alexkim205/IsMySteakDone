import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../../components/Button.component";
import { DonenessTypes } from "./questions";
import { handleButtonColor } from "../../helper";

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
        border: 4px solid gray;
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
  const { scenario, part } = useParams();
  const [value, setValue] = useState(null);
  const { setup, prompt, img } = qInfo;

  useEffect(() => {
    // Check localstorage to see if q has already been submitted, if so populate value
    const cachedData = JSON.parse(localStorage.getItem(`s${scenario}p${part}`));
    if (!cachedData) return
    setValue(cachedData.selectedVal);
  }, [scenario, part]);

  const handleClick = (e, val) => {
    e.preventDefault();
    if (hasSubmitted) {
      return;
    }
    setValue(val);
    handleSubmit(val);
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
              type={handleButtonColor(done, value, hasSubmitted, isCorrect)}
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
