import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";
import styled from "styled-components";
import theme, { flexCenter } from "../../../Styles/Theme";

const Column = ({ data, addToCart }) => {
  const history = useHistory();

  const handleCheckMovePage = () => {
    if (!sessionStorage.getItem("token")) {
      alert("로그인이 필요한 서비스입니다.");
      history.push("/login");
    }
    if (data.id === 11) {
      history.push("/Industries");
    } else {
      if (window.confirm("장바구니로 이동하시겠습니까?")) {
        history.push("/cart");
      }
      addToCart(data);
    }
  };

  return (
    <>
      <ColumnContainer onClick={handleCheckMovePage} data={data}>
        <div className="bg">
          <span>{data.title}</span>
        </div>
      </ColumnContainer>
    </>
  );
};

export default connect(null, { addToCart })(Column);

const ColumnContainer = styled.div`
  width: 250px;
  height: 151px;
  font-size: 18px;
  margin: 15px auto;
  text-align: center;
  background-image: url(${(props) => props.data.src});
  background-size: 100% 100%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover {
    animation: 0.8s showBig alternate infinite;
  }

  .bg {
    width: 250px;
    height: 151px;
    position: absolute;
    ${flexCenter};
    background-color: rgba(0, 0, 0, 0.4);
    background-position: 50% 50%;
    color: ${theme.white};
  }
  .bg:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.6s;
  }

  span {
    width: 70%;
    text-decoration: none;
    color: ${theme.white};
    text-transform: uppercase;
    line-height: 20px;
    letter-spacing: 3px;
    font-family: ${theme.fontTitle};
  }

  @keyframes showBig {
    0% {
      background-size: 100% 100%;
      background-position: 50% 50%;
      font-size: 18px;
    }

    100% {
      background-size: 130% 130%;
      background-position: 50% 50%;
      font-size: 19px;
      border: 1px solid rgba(255, 255, 255);
    }
  }
`;
