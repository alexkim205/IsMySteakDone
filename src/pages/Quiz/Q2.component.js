import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../../components/Button.component";
import { Palm, Face } from "../../components/HoverMedia.component";
import fistpng from "../../media/fist.png";
import { TactileTypes, FistTypes } from "./questions";
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
      margin: 0 auto 2em auto;
      display: flex;
      justify-content: center;

      img {
        height: 250px;
        border: 4px solid gray;
      }
      /* height: 400px; */
    }
    .choices {
      width: 100%;
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
  const { setup, prompt, media } = qInfo;
  const [fistValue, setFistValue] = useState(null);

  useEffect(() => {
    // For fist value only
    // Check localstorage to see if q has already been submitted, if so populate value
    if (media !== TactileTypes.FIST) {
      return;
    }
    const cachedData = JSON.parse(localStorage.getItem(`s${scenario}p${part}`));
    if (!cachedData) return
    setFistValue(cachedData.selectedVal);
  }, [scenario, part, media]);

  const renderType = () => {
    if (media === TactileTypes.PALM) {
      return (
        <div className="wrapper">
          <Palm
            hasSubmitted={hasSubmitted}
            handleSubmit={handleSubmit}
            isCorrect={isCorrect}
          />
        </div>
      );
    } else if (media === TactileTypes.FACE) {
      return (
        <div className="wrapper">
          <Face
            hasSubmitted={hasSubmitted}
            handleSubmit={handleSubmit}
            isCorrect={isCorrect}
          />
        </div>
      );
    } else if (media === TactileTypes.FIST) {
      return (
        <Fragment>
          <div className="wrapper">
            <img src={fistpng} alt="fist"></img>
          </div>
          <div className="choices">
            {Object.keys(FistTypes).map((fist, i) => (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  if (hasSubmitted) {
                    return;
                  }
                  setFistValue(fist);
                  handleSubmit(fist);
                }}
                disabled={hasSubmitted}
                type={handleButtonColor(
                  fist,
                  fistValue,
                  hasSubmitted,
                  isCorrect
                )}
                key={i}
              >
                {fist.replace("_", "-")}
              </Button>
            ))}
          </div>
        </Fragment>
      );
    }
  };

  return (
    <Container>
      <div className="setup">{setup}</div>
      <div className="prompt">{prompt}</div>
      <div className="input">{renderType()}</div>
    </Container>
  );
};
