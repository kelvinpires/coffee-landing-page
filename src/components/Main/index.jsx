import React from "react";
import RocketCoffeeImg from "../../assets/rocket-coffee.png";
import {
  CoffeeImg,
  CoffeeInfoButton,
  CoffeeInfoButtonDiv,
  CoffeeInfoContainer,
  CoffeeInfoText,
  CustomTitle,
  MainContainer,
  NormalTitle,
  TitlesContainer,
} from "./styles";

export const Main = () => {
  return (
    <MainContainer>
      <CoffeeInfoContainer>
        <CoffeeInfoText>
          O café que fará seu código decolar para o próximo nível.
        </CoffeeInfoText>
        <CoffeeInfoButtonDiv>
          <CoffeeInfoButton>PEGAR MEU CAFÉ</CoffeeInfoButton>
        </CoffeeInfoButtonDiv>
      </CoffeeInfoContainer>
      <TitlesContainer>
        <NormalTitle>Great Coffee</NormalTitle>
        <CustomTitle children="<Great Code/>" />
      </TitlesContainer>
      <CoffeeImg src={RocketCoffeeImg} alt="Rocket Coffee image" />
    </MainContainer>
  );
};
