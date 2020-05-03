import React from "react";
import styled from "styled-components";

import meatpng from "../media/meat-bg.jpg";
import Container from "./Container.layout";

const TitleSection = styled.div`
  width: 100%;
  padding: 9em 2em 12em 2em;
  box-sizing: border-box;
  background-color: salmon;
  /* background-image: url(${meatpng}); */
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
