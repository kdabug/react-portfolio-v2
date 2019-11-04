import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

const LayoutContainer = styled.div``;

function Layout(props) {
  return (
    <LayoutContainer>
      <Hero photo={props.photo} />
      <Navigation />
      {props.children}
    </LayoutContainer>
  );
}

export default Layout;
