import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideNav from "./SideNav";
import theme from "../../Styles/Theme";
import { flexCenter } from "../../Styles/Theme";

function Nav() {
  const [scrollTop, setScrollTop] = useState(0);
  const [sideMenu, setsideMenu] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollTop]);

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const { scrollHeight, clientHeight } = document.documentElement;
    const scrollTop = winScroll / (scrollHeight - clientHeight);
    setScrollTop(scrollTop);
  };

  const showSideMenu = () => {
    setsideMenu(!sideMenu);
    document.body.style.overflow = "hidden";
  };

  const hideSideMenu = (props) => {
    setsideMenu(false);
    document.body.style.overflow = "unset";
  };

  const refreshSideBar = (props) => {
    setsideMenu(null);
    document.body.style.overflow = "unset";
  };

  return (
    <NavContainer scrollTop={scrollTop}>
      <MenuTab onClick={showSideMenu}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="label">MENU</span>
      </MenuTab>
      <HomeTab>
        <img className="logo" alt="logo" src="/images/logo_sm.png" />
        {scrollTop >= 0.047 && <span>COVID-19 in the United States</span>}
      </HomeTab>
      <RightTab>
        <img alt="cart" src="./images/svg/cart.svg" />
        <div>☌</div>
      </RightTab>
      <SideNav
        sideMenu={sideMenu}
        hideSideMenu={hideSideMenu}
        refreshSideBar={refreshSideBar}
      />
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.nav`
  height: 40px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  ${flexCenter};
  background-color: ${(props) => props.scrollTop >= 0.047 && "#141B2E"};
  transition: 0.5s ease;
  z-index: 999;
`;

const MenuTab = styled.div`
  padding: 10px 13px;
  left: 0px;
  position: absolute;
  cursor: pointer;
  opacity: 0.7;

  .hamburger {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    position: relative;
    display: inline-block;

    span {
      width: 100%;
      height: 2px;
      top: 6px;
      display: block;
      position: absolute;
      border-radius: 3px;
      background-color: ${theme.white};

      &:first-child {
        top: 0px;
      }

      &:last-child {
        top: 12px;
      }
    }
  }

  .label {
    vertical-align: top;
    font-size: 14px;
    font-family: ${theme.fontContent};
    color: ${theme.white};
  }

  &:hover {
    opacity: 1;
  }
`;

const HomeTab = styled.a`
  text-decoration: none;
  ${flexCenter}

  img {
    width: 80px;
  }

  span {
    margin-left: 10px;
    font-size: 24px;
    font-family: ${theme.fontTitle};
    color: ${theme.orange};
  }
`;

const RightTab = styled.div`
  right: 0;
  padding: 10px 13px;
  position: absolute;
  ${flexCenter}
  opacity:0.7;
  cursor: pointer;

  img {
    width: 22px;
    height: 20px;
  }

  &:hover {
    transition: 0.3s ease-in-out;
    opacity: 1;
  }

  div {
    margin-left: 20px;
    font-size: 25px;
    color: ${theme.white};
    transform: rotate(100deg);
  }
`;
