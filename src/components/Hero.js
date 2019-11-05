import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div``;

function Hero(props) {
  return (
    <HeroContainer>
      <img src={props.photo} alt={props.alt} />>
    </HeroContainer>
  );
}

export default Hero;
