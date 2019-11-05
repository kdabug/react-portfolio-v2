import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Navigation from "./Navigation";

const LayoutContainer = styled.div``;

function Layout(props) {
  return (
    <LayoutContainer>
      <Hero photo={props.photo} alt={props.alt} />
      <Navigation />
      {props.children}
    </LayoutContainer>
  );
}

export default Layout;
