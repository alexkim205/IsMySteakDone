import styled from "styled-components";
import { StickyContainer } from "react-sticky";
import { Link as ScrollLink } from "react-scroll";

export const StyledStickyContainer = styled(StickyContainer)`
  height: 100%;

  a.active {
    color: black;
    font-weight: bold;
  }

  .vertical-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    background: lightsteelblue;
    top: 50px !important;

    .info {
      display: flex;
      flex-direction: row;

      .scroll {
        width: 10px;
        background-color: lightcyan;
      }
      .headers {
        display: flex;
        flex: 1;
        flex-direction: column;

        .item {
          height: 50px;
          padding: 20px 0 20px 1em;
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

export const ScrollNavLink = styled(ScrollLink)`
  font-size: 1.2em;
  cursor: pointer;
  color: gray;
`;

export const ScrollToTopButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  position: fixed;
  bottom: 20px;
  right: 20px;

  outline: none;
  padding: 1em 1em;
  margin: 1em 1em;
  height: 60px;
  width: 60px;
  border: none;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #3369ff;
  cursor: pointer;
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);

  &:active {
    bottom: calc(20px - 0.1em);
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
`;
