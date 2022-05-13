import React from "react";
import RocketCoffeeImg from "../../assets/rocket-coffee.png";
import {
  CoffeeImg,
  CustomTitle,
  MainContainer,
  NormalTitle,
  TitlesContainer,
} from "./styles";

export const Main = () => {
  return (
    <MainContainer>
      <TitlesContainer>
        <NormalTitle>Great Coffee</NormalTitle>
        <CustomTitle children="<Great Code/>" />
      </TitlesContainer>
      <CoffeeImg src={RocketCoffeeImg} alt="Rocket Coffee image" />
    </MainContainer>
  );
};
