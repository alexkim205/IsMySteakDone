import React from "react";
import styled from "styled-components";

import { breakpoint } from "../helper";

import Container from "./Container.layout";

const Section = styled.div`
  width: 100%;
  padding: 2em 2em ${({ last }) => (last ? "4em" : "2em")} 2em;
  box-sizing: border-box;
  /* background-color: lightgoldenrodyellow; */
  border-bottom: ${({ last }) => (last ? "1px solid #20b2aa" : "none")};
  display: flex;
  justify-content: center;

  h2 {
    font-size: 2em;
    margin-bottom: 1em;
  }
  p {
    font-size: 1em;
  }

  .flex-v {
    display: flex;
    flex-direction: column;
  }

  .spacer {
    flex: 1;
  }

  .flex-h {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    ${breakpoint.down("m")`
      flex-direction: column;
    `}

    svg {
      align-self: center;

      ${breakpoint.down("m")`
        transform: rotate(90deg);
      `}
    }

    .image {
      border: 3px solid #4a4e69;
      height: 250px;
      overflow: hidden;
      box-sizing: border-box;

      ${breakpoint.down("m")`
        width: 100% !important;
      `}
      &.left {
        width: 40%;
      }
      &.right {
        width: 30%;
      }
    }
    .text {
      /* text-align: justify; */
      p:first-child {
        margin-top: 0;
      }
      p:last-child {
        margin-bottom: 0;
      }
      ${breakpoint.down("m")`
        width: 100% !important;
      `}
    }
  }
`;

export default ({ children, center, ...otherProps }) => (
  <Section {...otherProps}>
    <Container center={center}>{children} </Container>
  </Section>
);
