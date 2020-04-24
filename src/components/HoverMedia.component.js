import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import facepng from "../media/face.png";

import palmpng from "../media/palm.png";
import palmrare from "../media/palm-rare.png";
import palmmediumrare from "../media/palm-medium-rare.png";
import palmmedium from "../media/palm-medium.png";
import palmwelldone from "../media/palm-well-done.png";

const ImageWrapper = styled.div`
  /* position: absolute; */
  margin: 0 auto;
  width: 300px;
  height: ${({ height }) => height}px;
  border: 4px solid gray;
  background-color: white;
  background-size: 300px 300px;
  background-repeat: no-repeat;
  background-position: bottom;
  /* background-attachment: fixed; */
  z-index: 1;

  background-image: url(${({ src }) => src});

  .tooltip {
    opacity: 1 !important;
    padding: 0.5em;
    img {
      width: 200px;
      height: 200px;
      overflow: hidden;
    }
  }
`;

const HoverArea = styled.div`
  position: relative;
  border-radius: 100%;
  background-color: ${({ selected }) => (selected ? "blue" : "lightblue")};
  z-index: 1;
  width: 20px;
  height: 20px;

  top: ${({ pos: { top } }) => top}px;
  left: ${({ pos: { left } }) => left}px;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  transform: scale(${({ selected }) => (selected ? 1.2 : 1.0)});

  ${({ disabled }) => {
    if (disabled) {
      return null;
    }
    return `
      &:hover {
          transform: scale(1.2);
          background-color: blue;
        }
    `;
  }}
`;

const fingerComponentData = [
  {
    id: "PINKY",
    pos: { top: 80, left: 42 },
    tooltip: <img src={palmwelldone} alt={"PINKY"}></img>,
  },
  {
    id: "RING",
    pos: { top: 20, left: 85 },
    tooltip: <img src={palmmedium} alt={"RING"}></img>,
  },
  {
    id: "MIDDLE",
    pos: { top: -13, left: 135 },
    tooltip: <img src={palmmediumrare} alt={"MIDDLE"}></img>,
  },
  {
    id: "INDEX",
    pos: { top: -21, left: 181 },
    tooltip: <img src={palmrare} alt={"INDEX"}></img>,
  },
];

const faceComponentData = [
  {
    id: "CHEEK",
    pos: { top: 190, left: 80 },
    tooltip: "Cheek",
  },
  {
    id: "CHIN",
    pos: { top: 240, left: 140 },
    tooltip: "Chin",
  },
  {
    id: "NOSE",
    pos: { top: 135, left: 140 },
    tooltip: "Nose",
  },
  {
    id: "FOREHEAD",
    pos: { top: 0, left: 140 },
    tooltip: "Forehead",
  },
];

const BaseHover = ({
  basepng,
  data,
  hasSubmitted,
  handleSubmit,
  isCorrect,
  height,
}) => {
  const { scenario, part } = useParams();
  const [value, setValue] = useState(null);

  useEffect(() => {
    // Check localstorage to see if q has already been submitted, if so populate value
    const cachedData = JSON.parse(localStorage.getItem(`s${scenario}p${part}`));
    if (!cachedData) return;
    setValue(cachedData.selectedVal);
  }, [scenario, part]);

  return (
    <ImageWrapper src={basepng} height={height}>
      {data &&
        data.map(({ id, pos, tooltip }, i) => (
          <Fragment key={i}>
            <HoverArea
              data-tip
              data-for={id}
              pos={pos}
              disabled={hasSubmitted}
              selected={id === value}
              onClick={(e) => {
                e.preventDefault();
                if (hasSubmitted) {
                  return;
                }
                setValue(id);
                handleSubmit(id);
              }}
            />
            <ReactTooltip className="tooltip" id={id}>
              {tooltip}
            </ReactTooltip>
          </Fragment>
        ))}
    </ImageWrapper>
  );
};

export const Palm = (p) => (
  <BaseHover basepng={palmpng} data={fingerComponentData} {...p} height={340} />
);

export const Face = (p) => (
  <BaseHover basepng={facepng} data={faceComponentData} {...p} height={300} />
);
