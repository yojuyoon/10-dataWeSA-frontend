import React from "react";
import styled from "styled-components";
import axios from "axios";
import theme, { flexCenter } from "../../Styles/Theme";
import { totalAPI } from "../../config";

const InserModal = ({ handleCloseModal, cart }) => {
  const handlePurchase = () => {
    const item = cart.map((data) => {
      return data.id;
    });
    const unique = { item: [...new Set(item)] };
    const headers = {
      Authorization: sessionStorage.getItem("token"),
      "Content-Type": "application/json",
    };

    handleCloseModal();
    axios
      .post(`${totalAPI}/order`, unique, { headers: headers })
      .then((response) => {
        localStorage.setItem("auth", response.data.message[0].auth);
        response.status === 200 && alert("결제 완료했습니다.");
        window.location.assign(response.data.message[0].link);
      })
      .catch(() => alert("Error!"));
  };

  return (
    <ModalContainer>
      <div className="overlay">
        <Top>
          <span onClick={() => handleCloseModal}>X</span>
        </Top>
        <Center>
          <div className="content">
            <h1>결제하시겠습니까?</h1>
            <br />
            <h2>확인을 선택하시면 결제가 진행됩니다.</h2>
            <br />
            <h2>
              총 가격 : {cart.length * 1000}원 {/* 데이터 수 x 1000 */}
            </h2>
            <br />
          </div>
        </Center>
        <Bottom>
          <CancelBtn onClick={handleCloseModal}>취소</CancelBtn>
          <InserBtn onClick={handlePurchase}>결제</InserBtn>
        </Bottom>
      </div>
    </ModalContainer>
  );
};

export default InserModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  position: absolute;
  ${flexCenter};

  .overlay {
    height: 500px;
    width: 500px;
    border: solid 1px black;
    background-color: ${theme.midgrey};
  }
`;

const Top = styled.div`
  height: 30px;
  background-color: ${theme.darknavy};
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    color: ${theme.white};
    cursor: pointer;
  }
`;

const Center = styled.div`
  height: 370px;
  width: 500px;
  ${flexCenter};

  .content {
    h1 {
      margin-bottom: 10px;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    }

    h2 {
      text-align: center;
      font-size: 20px;
      color: "#949494";
    }
  }
`;

const Bottom = styled.div`
  height: 100px;
  margin: 0 auto;
  ${flexCenter};
`;

const InserBtn = styled.div`
  height: 60px;
  width: 150px;
  margin: 0 20px;
  ${flexCenter};
  font-weight: bold;
  font-size: 18px;
  color: ${theme.white};
  background-color: #ef6145;
  cursor: pointer;
`;
const CancelBtn = styled.div`
  height: 60px;
  width: 150px;
  margin: 0 20px;
  ${flexCenter};
  font-weight: bold;
  font-size: 18px;
  color: ${theme.white};
  background-color: #ef6145;
  cursor: pointer;
`;
