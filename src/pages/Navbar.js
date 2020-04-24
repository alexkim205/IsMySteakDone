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
  background-color: pink;
  padding: 0 0.5em;
  z-index: 5;

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

  &:hover {
    background-color: #e75480;
  }

  color: black;
  text-decoration: none;
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};

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
        Home
      </NavItem>
      <NavItem selected={pathname === "/levels"} to="/levels">
        Levels of Doneness
      </NavItem>
      <NavItem selected={pathname === "/palm"} to="/palm">
        The Palm Test
      </NavItem>
      <NavItem selected={pathname === "/face"} to="/face">
        The Face Test
      </NavItem>
      <NavItem selected={pathname === "/fist"} to="/fist">
        The Fist Test
      </NavItem>
      <div className="spacer"></div>
      <NavItem selected={pathname === "/cheat-sheet"} to="/cheat-sheet">
        Cheat Sheet
      </NavItem>
      <NavItem selected={pathname.startsWith("/quiz")} to="/quiz/start">
        Quiz
      </NavItem>
    </Container>
  );
};

export default Navbar;
