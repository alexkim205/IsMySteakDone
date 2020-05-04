import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #a5ffd6;
  padding: 10em 2em 2em 2em;
  color: gray;

  a {
    color: black;
    transition: box-shadow 0.12s ease-in-out;
    box-shadow: inset 0 -3px 0 -1px #ff6961;
    text-decoration: none;

    &:focus,
    &:visited {
      color: black;
    }
    &:hover {
      box-shadow: inset 0 -40px 0 -1px #ff6961;
      /* font-weight: bold; */
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <small>
        Made with{" "}
        <span role="img" aria-label="heart">
          ♥️
        </span>{" "}
        by{" "}
        <a
          href="https://github.com/alexkim205"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alex Kim
        </a>
        .
      </small>
      <small>
        Open sourced on{" "}
        <a
          href="https://github.com/alexkim205/IsMySteakDone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
      </small>
    </Container>
  );
};

export default Footer;
