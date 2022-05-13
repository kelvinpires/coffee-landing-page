import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 16rem 1rem 28rem;
`;

export const LogoDiv = styled.div``;

export const LogoImg = styled.img``;

export const MenuContainer = styled.div``;

export const MenuUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 4rem;
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
`;
