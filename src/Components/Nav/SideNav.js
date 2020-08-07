import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import theme from "../../Styles/Theme";

function SideNav({ sideMenu, hideSideMenu }) {
  return (
    <>
      <SideMenuBackground sideMenu={sideMenu} onClick={hideSideMenu} />
      <SideMenuContainer sideMenu={sideMenu}>
        <MenuContents>
          <div onClick={hideSideMenu} className="closeBtn">
            X
          </div>
          <Link to="/">HOME</Link>
          <Link to="/">
            CORONA VIRUS <span>NEW</span>
          </Link>
          <li>EXPLORE</li>
          <ul className="subtitle">
            <li>LOCATIONS</li>
            <li>INDUSTRIES</li>
            <li>LOCATIONS</li>
            <li>DEGREES</li>
            <li>UNIVERSITIES</li>
            <li>PRODUCTS & SERVICES</li>
          </ul>
          <li>VIZ BUILDER</li>
          <li>MAPS</li>
          <li>STORIES</li>
          <li>DATA CART</li>
          <li>ABOUT</li>
          <li>DATA SOURCES</li>
          <LogoContainer>
            <img alt="logo" src="/images/deloitte.png" />
            <img alt="logo" src="/images/datawheel.png" />
          </LogoContainer>
        </MenuContents>
      </SideMenuContainer>
    </>
  );
}

export default SideNav;

const SideMenuBackground = styled.div`
  width: 100%;
  height: 100vh;
  top: 40px;
  left: 0;
  position: fixed;
  background-color: ${theme.white};
  opacity: 0.4;
  z-index: 2;
  display: ${(props) => (props.sideMenu ? "block" : "none")};
`;

const SideMenuContainer = styled.div`
  width: 300px;
  height: 100vh;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  position: absolute;
  z-index: 999;
  background-color: #1b191d;
  color: ${theme.white};
  ${(props) =>
    props.sideMenu !== null &&
    css`
      animation: 0.7s ${(props) => (props.sideMenu ? "showUp" : "showOut")}
        forwards;
    `}

  @keyframes showUp {
    0% {
      transform: translate(-100%, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes showOut {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-100%, 0);
      display: none;
    }
  }
`;

const MenuContents = styled.ul`
  height: 100vh;
  padding: 40px 35px;
  font-size: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: ${theme.fontContent};

  a {
    margin: 10px 0;
    text-decoration: none;
    color: ${theme.white};

    &:hover {
      color: #c09cd6;
    }
  }

  .closeBtn {
    top: 10px;
    right: 20px;
    position: absolute;
    cursor: pointer;
  }

  ul {
    margin: 10px 0;
  }

  li {
    margin: 10px 0;
    cursor: pointer;

    &:hover {
      color: #c09cd6;
    }
  }

  span {
    vertical-align: top;
    font-size: 10px;
    color: ${theme.orange};
  }

  .subtitle {
    margin: 15px 10px;

    li {
      font-size: 15px;
    }
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  text-align: center;
  img {
    width: 100px;
  }
`;
