import React from "react";
import styled from "styled-components";
import { breakpoint } from "../helper";

import Container from "./Container.layout";

const Section = styled.div`
  width: 100%;
  padding: 2em 2em 1em 2em;
  box-sizing: border-box;
  background-color: lightgoldenrodyellow;

  h2 {
    font-size: 2em;
    margin-bottom: 1em;
  }
  p {
    font-size: 1em;
  }

  .flex-h {
    display: flex;
    flex-direction: row;

    ${breakpoint.down("m")`
      flex-direction: column;
    `}

    .image {
      margin-right: 1em;
      margin-bottom: 1em;
      ${breakpoint.down("m")`
        width: 100%;
      `}
    }
    .text {
      text-align: justify;
      ${breakpoint.down("m")`
        width: 100%;
      `}
    }
  }
`;

export default ({ children, center, ...otherProps }) => (
  <Section {...otherProps}>
    <Container center={center}>{children} </Container>
  </Section>
);
