import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { AiFillPlusCircle } from "react-icons/ai";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
    }
`;

export const AiFillPlusCircleStyled = styled(AiFillPlusCircle)`
  color: ${(props) => props.theme.mainColor};
  margin-left: 80%;
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  width: 100px;
  padding: 2px;
  border-radius: 5px;
  margin-top: 10px;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
  .ml-0 {
    margin-left: auto;
  }
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 9rem;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin: 10px;

  &.active {
    color: ${(props) => props.theme.red};
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CookieWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
    margin-right: 20px;
  }

  p {
    vertical-align: middle;
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;
