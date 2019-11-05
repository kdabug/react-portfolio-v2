import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationContainer = styled.nav``;

function Navigation(handleNavChange) {
  const changePhoto = target => {
    console.log(target);
    handleNavChange(target.name);
  };
  return (
    <NavigationContainer onClick={changePhoto}>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact </Link>
    </NavigationContainer>
  );
}

export default Navigation;
