import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  /* background-color: #84dcc6; */
  background-color: #ffffff;
  padding: 0 0.5em;
  z-index: 5;
  border-bottom: 1px solid black;

  .spacer {
    flex: 1;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  /* width: 150px; */
  align-items: center;
  justify-content: center;
  padding: 0 1em;
  transition: 0.3s background-color;
  cursor: pointer;

  span {
    transition: box-shadow 0.12s ease-in-out;
    color: black;

    box-shadow: ${({ selected }) =>
      selected
        ? "inset 0 -40px 0 -1px #ff6961"
        : "inset 0 -3px 0 -1px #ff6961"};

    &:hover {
      box-shadow: inset 0 -40px 0 -1px #ff6961;
      /* font-weight: bold; */
    }
  }

  color: black;
  text-decoration: none;
  /* font-weight: ${({ selected }) => (selected ? "bold" : "normal")}; */
  font-weight: 500;

  &:visited,
  &:active,
  &:hover {
    color: black;
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <NavItem selected={pathname === "/"} to="/">
        <span>Home</span>
      </NavItem>
      <NavItem selected={pathname === "/levels"} to="/levels">
        <span>Levels of Doneness</span>
      </NavItem>
      <NavItem selected={pathname === "/palm"} to="/palm">
        <span>The Palm Test</span>
      </NavItem>
      <NavItem selected={pathname === "/face"} to="/face">
        <span>The Face Test</span>
      </NavItem>
      <NavItem selected={pathname === "/fist"} to="/fist">
        <span>The Fist Test</span>
      </NavItem>
      <div className="spacer"></div>
      <NavItem selected={pathname === "/cheat-sheet"} to="/cheat-sheet">
        <span>Cheat Sheet</span>
      </NavItem>
      <NavItem selected={pathname.startsWith("/quiz")} to="/quiz/start">
        <span>Quiz</span>
      </NavItem>
    </Container>
  );
};

export default Navbar;
