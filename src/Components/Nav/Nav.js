import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart, removeAll } from "../../redux/actions/cartActions";
import styled from "styled-components";
import SideNav from "./SideNav";
import theme, { flexCenter } from "../../Styles/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Nav({ cart, removeFromCart, removeAll }) {
  const [scrollTop, setScrollTop] = useState(0);
  const [sideMenu, setsideMenu] = useState(null);
  const [cartBox, setCartBox] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollTop]);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
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

  const handleTokenCheck = () => {
    sessionStorage.getItem("token")
      ? history.push("/cart")
      : alert("로그인이 필요한 서비스입니다") || history.push("/login");
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleAllRemove = () => {
    removeAll();
  };

  return (
    <NavContainer onMouseLeave={() => setCartBox(false)} scrollTop={scrollTop}>
      <MenuTab onClick={showSideMenu}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="label">MENU</span>
      </MenuTab>
      <HomeTab>
        <Link to="/home">
          <h1>DATAWeSA:</h1>
        </Link>
        {scrollTop >= 0.047 && <span>COVID-19 in the United States</span>}
      </HomeTab>
      <RightTab>
        <span>{cart.length}</span>
        {cart.length > 0 ? (
          <img
            className="cart-red"
            onMouseEnter={() => setCartBox(true)}
            onClick={handleTokenCheck}
            alt="cart"
            src="./images/svg/cart-red.svg"
          />
        ) : (
          <img
            className="cart"
            onMouseEnter={() => setCartBox(true)}
            onClick={handleTokenCheck}
            alt="cart"
            src="./images/svg/cart.svg"
          />
        )}
      </RightTab>
      {cartBox && (
        <CartBoxContainer>
          <h3>Data Cart</h3>
          <span>{cart.length} Dataset</span>
          <ul>
            {cart.map((item) => {
              return (
                <>
                  <li>
                    {item.title}
                    <button onClick={() => handleRemove(item.id)}>X</button>
                  </li>
                </>
              );
            })}
          </ul>
          <ClearBtn onClick={() => handleAllRemove()}>
            <FontAwesomeIcon className="edit" icon={faTrashAlt} />
            <p>Clear Cart</p>
          </ClearBtn>
        </CartBoxContainer>
      )}
      <SideNav
        sideMenu={sideMenu}
        hideSideMenu={hideSideMenu}
        refreshSideBar={refreshSideBar}
      />
    </NavContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart, removeAll })(Nav);

const NavContainer = styled.nav`
  height: 40px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  ${flexCenter};
  background-color: ${(props) => props.scrollTop >= 0.047 && `${theme.navy}`};
  box-shadow: ${(props) =>
    props.scrollTop >= 0.047 && "5px 5px 5px rgba(12,12,12,0.4)"};
  transition: 0.5s ease;
  z-index: 999;

  .setBackground {
    background-color: ${theme.navy};
  }
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

const HomeTab = styled(Link)`
  ${flexCenter}
  text-decoration: none;

  a {
    color: transparent;
  }

  h1 {
    font-size: 24px;
    font-family: ${theme.fontTitle};
    color: ${theme.white};
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
  font-size: 15px;
  color: ${theme.white};

  span {
    margin-right: 8px;
  }

  .cart {
    width: 22px;
    height: 20px;
  }

  &:hover {
    transition: 0.3s ease-in-out;
    opacity: 1;
  }
`;

const CartBoxContainer = styled.div`
  width: 300px;
  height: 230px;
  top: 40px;
  right: 30px;
  padding: 30px;
  position: absolute;
  background-color: ${theme.grey};
  animation: showBox 0.3s;
  overflow: hidden;

  span {
    font-size: 14px;
    opacity: 0.7;
  }

  ul {
    height: 100px;
    margin-top: 10px;
    font-size: 15px;
    line-height: 20px;
    overflow: hidden;
    overflow-y: scroll;

    li {
      display: flex;
      justify-content: space-between;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @keyframes showBox {
    0% {
      width: 100px;
      height: 100px;
    }
    100% {
      width: 300px;
      height: 230px;
    }
  }
`;

const ClearBtn = styled.div`
  width: 230px;
  height: 30px;
  margin-top: 10px;
  ${flexCenter};
  background-color: ${theme.orange};
  color: ${theme.white};
  cursor: pointer;

  p {
    margin-left: 10px;
  }
`;
