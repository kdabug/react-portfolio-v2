import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Navigation from "./Navigation";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  height: 100vh;
`;

function Layout(props) {
  console.log("layout props", props);

  return (
    <LayoutContainer>
      <Hero photo={props.photo} alt={props.alt} />
      <div>
        <Navigation handleNavChange={props.handleNavChange} />
        {props.children}
      </div>
    </LayoutContainer>
  );
}

export default Layout;
