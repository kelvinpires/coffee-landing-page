import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 16rem 1rem 28rem;

  @media screen and (max-width: 700px) {
    padding: 2rem;
    max-width: 100vw;
    border-bottom: 0.1rem solid var(--text-color-menu-mobile);
  }
`;

export const LogoDiv = styled.div``;

export const LogoImg = styled.img`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const MenuContainer = styled.div``;

export const MenuUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 4rem;

  @media screen and (max-width: 700px) {
    z-index: 999;
    background-color: var(--background);
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: ${({ display }) => display};
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuLi = styled.li`
  font-size: 1.6rem;
  font-weight: 500;
  font-family: "Manrope", sans-serif;
`;

export const MenuLink = styled.a`
  color: var(--text-color-menu-mobile);
  text-decoration: none;

  &:hover {
    color: var(--button);
    text-decoration: underline;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  padding: 1rem 3.8rem;
  background: transparent;
  color: var(--text-color);
  border: 0.1rem solid var(--button);
  border-radius: 0.6rem;
  font-weight: 800;
  font-family: "Manrope", sans-serif;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: var(--button);
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const MenuButton = styled.a``;

export const MenuButtonOpenImg = styled.img`
  @media screen and (min-width: 700px) {
    display: none;
  }
  display: ${({ display }) => display};
`;

export const MenuButtonCloseImg = styled.img`
  @media screen and (min-width: 700px) {
    display: none;
  }
  position: absolute;
  top: 1rem;
  right: 2rem;
`;

// mobile;

export const LogoImgMobile = styled.img`
  @media screen and (min-width: 700px) {
    display: none;
  }
`;
