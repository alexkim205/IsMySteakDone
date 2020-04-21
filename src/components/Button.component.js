import styled from "styled-components";
import { Link } from "react-router-dom";

// https://fdossena.com/?p=html5cool/buttons/i.frag

export default styled(Link)`
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
        return "#3369ff";
    }
  }};
  cursor: pointer;
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
  text-align: center;
  position: relative;

  &:active {
    top: 0.1em;
  }
`;
