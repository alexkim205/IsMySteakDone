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

  .spacer {
    flex: 1;
  }
`;

const NavItem = styled.div`
  display: flex;
  /* width: 150px; */
  align-items: center;
  justify-content: center;
  padding: 0 1em;

  a {
    text-decoration: none;
    &:visited,
    &:active,
    &:hover {
      color: black;
    }
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();
  console.log("Navbar -> pathname", pathname);

  return (
    <Container>
      <NavItem active={pathname === "/"}>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem active={pathname === "/"}>
        <Link to="/levels">Levels of Doneness</Link>
      </NavItem>
      <NavItem active={pathname === "/"}>
        <Link to="/palm">The Palm Test</Link>
      </NavItem>
      <NavItem active={pathname === "/"}>
        <Link to="/face">The Face Test</Link>
      </NavItem>
      <NavItem active={pathname === "/"}>
        <Link to="/fist">The Fist Test</Link>
      </NavItem>
      <div className="spacer"></div>
      <NavItem active={pathname === "/"}>
        <Link to="/cheat-sheet">Cheat Sheet</Link>
      </NavItem>
      <NavItem active={pathname === "/"}>
        <Link to="/quiz">Quiz</Link>
      </NavItem>
    </Container>
  );
};

export default Navbar;
