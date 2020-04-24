import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

import { Button } from "../../components/Button.component";

const Container = styled.div`
  width: 100%;

  .setup {
  }
  .prompt {
    font-weight: bold;
    margin: 2em auto 1em auto;
  }
  .input {
    margin: 0em 2em 7em 2em;
    box-sizing: border-box;
    padding: 1em;
    height: 3em;

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
      height: 10px;

      .rc-slider {
        width: 100%;
        height: 10px !important;
      }

      .rc-slider-rail {
        background-color: #e9e9e9;
        height: 10px !important;
        border-radius: 6px;
      }

      .rc-slider-track {
        height: 10px !important;
        border-radius: 6px;
        background-color: #abe2fb;
      }

      .rc-slider-disabled {
        background-color: transparent;
      }

      .rc-slider-step {
        height: 10px;
      }

      .rc-slider-dot {
        position: absolute;
        bottom: -3px;
        margin-left: -5px;
        width: 16px;
        height: 16px;
        border: 2px solid #e9e9e9;
        background-color: #fff;
      }

      .rc-slider-dot-active {
        border-color: #96dbfa;
        /* background-color: #96dbfa; */
      }

      .rc-slider-handle {
        width: 22px;
        height: 22px;
        margin-top: -6px;
        border: solid 4px #96dbfa;
        background-color: #fff;
      }

      .rc-slider-mark {
        top: 30px;
        font-size: 1em;
      }

      .rc-slider-mark-text {
        color: #999;
        width: 50px;
        overflow: visible;
      }

      .rc-slider-mark-text-active {
        color: #000;
      }
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
  const { setup, prompt, suffix } = qInfo;
  const [value, setValue] = useState(0);
  const marks = [...Array(11).keys()].reduce(
    (obj, k) => ({ ...obj, [k]: k }),
    {}
  );
  // marks[0] = `0 ${suffix}`;

  useEffect(() => {
    // Check localstorage to see if q has already been submitted, if so populate value
    const cachedData = JSON.parse(localStorage.getItem(`s${scenario}p${part}`));
    if (!cachedData) return
    setValue(cachedData.selectedVal);
  }, [scenario, part]);

  const handleChange = (v) => {
    setValue(v);
  };

  return (
    <Container>
      <div className="setup">{setup}</div>
      <div className="prompt">{prompt}</div>
      <div className="input">
        <div className="value">
          <span className="bold">{value}</span> {suffix}
        </div>
        <div className="wrapper">
          <Slider
            min={0}
            max={10}
            defaultValue={0}
            value={value}
            marks={marks}
            step={0.5}
            disabled={hasSubmitted}
            onChange={handleChange}
          />
        </div>
      </div>
      {!hasSubmitted && (
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
      )}
    </Container>
  );
};
