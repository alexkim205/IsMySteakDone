import React from "react";
import styled from "styled-components";

import Container from "./Container.layout";

const TitleSection = styled.div`
  width: 100%;
  padding: 4.5em 2em 6em 2em;
  box-sizing: border-box;
  background-color: #a5ffd6;
  display: flex;
  border-bottom: 1px solid #20b2aa;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 4em;
    margin-bottom: 0;
  }
  p {
    font-size: 1.1em;
  }
  a {
    margin-top: 1em;
  }
`;

export default ({ children, ...otherProps }) => (
  <TitleSection {...otherProps}>
    <Container center>{children}</Container>
  </TitleSection>
);
