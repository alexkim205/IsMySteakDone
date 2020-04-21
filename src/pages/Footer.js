import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: skyblue;
  height: 100px;
`;

const Footer = () => {
  return (
    <Container>
      <h2>Footer</h2>
    </Container>
  );
};

export default Footer;
