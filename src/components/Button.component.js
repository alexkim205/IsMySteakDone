import styled from "styled-components";
import { Link } from "react-router-dom";

import { breakpoint } from "../helper";

// https://fdossena.com/?p=html5cool/buttons/i.frag

export const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 0.7em 1.4em;
  margin: 0.2em 1em;
  border-radius: 0.15em;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffffff;
  background-color: ${({ type }) => {
    switch (type) {
      case "cancel":
        return "#668fff";
      default:
        return "#153B50";
    }
  }};
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
  text-align: center;
  position: relative;

  ${breakpoint.down("m")`
    margin: 0.4em 0;
  `}

  &:active {
    top: 0.1em;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: ${({ icon }) => (icon ? "0.7em" : "0.7em 1.4em")};
  margin: 0.2em 1em;
  border-radius: 0.15em;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
  font-size: 1em;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffffff;
  background-color: ${({ type }) => {
    switch (type) {
      case "cancel":
        return "#668fff";
      case "choice":
        return "#79a2b8";
      case "disabled":
        return "gray";
      case "success":
        return "#24de89";
      case "failure":
        return "#FF6052";
      default:
        return "#153B50";
    }
  }};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
  text-align: center;
  position: relative;

  &:active {
    top: 0.1em;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({ disabled, success, failure }) =>
      disabled || success || failure ? "none" : "#21648a"};
  }
`;
