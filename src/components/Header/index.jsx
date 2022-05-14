import React from "react";
import Logo from "../../assets/logo-desktop.svg";
import LogoMobile from "../../assets/logo-mobile.svg";
import MenuOpen from "../../assets/menu-buguer-open.svg";
import MenuClose from "../../assets/menu-buguer-close.svg";

import {
  Button,
  HeaderContainer,
  LogoDiv,
  LogoImg,
  LogoImgMobile,
  MenuButton,
  MenuButtonCloseImg,
  MenuButtonOpenImg,
  MenuContainer,
  MenuLi,
  MenuLink,
  MenuUl,
} from "./styles";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      {/* logo */}
      <LogoDiv>
        <LogoImg src={Logo} alt="Rocket Coffee Logo" />
        <LogoImgMobile src={LogoMobile} alt="Rocket Coffee Logo" />
      </LogoDiv>

      {/* menu */}
      <MenuContainer>
        <MenuUl display={() => (isMenuOpen ? "flex" : "none")}>
          <MenuButton>
            <MenuButtonCloseImg
              onClick={handleMenu}
              src={MenuClose}
              alt="Imagem para fechar o menu"
            />
          </MenuButton>
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

      <MenuButton>
        <MenuButtonOpenImg
          onClick={handleMenu}
          src={MenuOpen}
          alt="Imagem para abrir o menu"
        />
      </MenuButton>
    </HeaderContainer>
  );
};
