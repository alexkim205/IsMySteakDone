import React from "react";
import styled from "styled-components";
import { breakpoint } from "../helper";

import Container from "./Container.layout";

const Section = styled.div`
  width: 100%;
  padding: 2em 2em ${({ last }) => (last ? "4em" : "2em")} 2em;
  box-sizing: border-box;
  /* background-color: lightgoldenrodyellow; */
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

    .image {
      margin-right: 1em;
      margin-bottom: 1em;
      ${breakpoint.down("m")`
        width: 100% !important;
      `}
    }
    .text {
      text-align: justify;
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
