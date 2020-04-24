import React from "react";
import styled from "styled-components";

import Container from "./Container.layout";

const TitleSection = styled.div`
  width: 100%;
  padding: 3em 2em 3em 2em;
  box-sizing: border-box;
  background-color: salmon;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 4em;
    margin-bottom: 0;
  }
  p {
    font-size: 1.1em;
  }
`;

export default ({ children, ...otherProps }) => (
  <TitleSection {...otherProps}>
    <Container center>{children} </Container>
  </TitleSection>
);
