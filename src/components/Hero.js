import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    background-size: contain;
  }
`;

function Hero(props) {
  console.log("hero props", props);
  return (
    <HeroContainer>
      <img src={props.photo} alt={props.alt} />
    </HeroContainer>
  );
}

export default Hero;
