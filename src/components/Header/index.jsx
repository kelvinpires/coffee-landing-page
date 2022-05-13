import React from "react";
import Logo from "../../assets/logo-desktop.svg";
import {
  Button,
  HeaderContainer,
  LogoDiv,
  LogoImg,
  MenuContainer,
  MenuLi,
  MenuLink,
  MenuUl,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      {/* logo */}
      <LogoDiv>
        <LogoImg src={Logo} alt="Rocket Coffee Logo" />
      </LogoDiv>

      {/* menu */}
      <MenuContainer>
        <MenuUl>
          <MenuLi>
            <MenuLink href="/home">Home</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="/menu">Menu</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="/rewards">Recompensas</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="/gift-cards">Gift Cards</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="/stores">Lojas</MenuLink>
          </MenuLi>
        </MenuUl>
      </MenuContainer>

      {/* button */}
      <Button>PEGAR MEU CAFÉ</Button>
    </HeaderContainer>
  );
};
