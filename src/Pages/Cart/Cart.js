import React, { useState } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { removeAll } from "../../redux/actions/cartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faMeh,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import InserModal from "./InserModal";
import theme, { flexCenter } from "../../Styles/Theme";

function Cart({ cart, removeAll }) {
  const [validModal, setValidModal] = useState(false);

  const handleOpenModal = () => {
    setValidModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setValidModal(false);
    document.body.style.overflow = "unset";
  };

  const handleAllRemove = () => {
    removeAll();
  };

  const cartList =
    cart.length > 0 ? (
      <div>
        <div className="addedDataContainer">
          {cart.map((item) => {
            return (
              <div key={item.id}>
                <Item item={item} />
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="emptyData">
        <FontAwesomeIcon className="emptyIcon" icon={faMeh} />
        <p>Cart is empty</p>
      </div>
    );
  return (
    <>
      {validModal && (
        <InserModal
          handleCloseModal={handleCloseModal}
          setValidModal={setValidModal}
          cart={cart}
        />
      )}
      <CartContainer validModal={validModal}>
        <DataContainer>
          <Profile>
            <FontAwesomeIcon className="user" icon={faUserCircle} />
            <span>Angel_luna</span>
            <FontAwesomeIcon className="edit" icon={faEdit} />
          </Profile>
          <h1 className="title">Data Cart</h1>
          <CartList>{cartList}</CartList>
          {cart.length > 0 && (
            <ClearBtn onClick={() => handleAllRemove()}>
              <FontAwesomeIcon className="edit" icon={faTrashAlt} />
              <p>Clear Cart</p>
            </ClearBtn>
          )}
        </DataContainer>
        <RightContainer>
          <Title>
            <h1>Added Data ({cart.length})</h1>
            <span>{cart.length} Dataset</span>
            <ul>
              {cart.map((item) => {
                return <li>• {item.title}</li>;
              })}
            </ul>
          </Title>
          <InserBtn
            onClick={
              cart.length > 0
                ? handleOpenModal
                : () => alert("결제할 내역이 없습니다")
            }
          >
            Check Out
          </InserBtn>
        </RightContainer>
      </CartContainer>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { removeAll })(Cart);

const CartContainer = styled.div`
  height: 100vw;
  right: 0;
  left: 0;
  display: flex;
  position: relative;
  overflow: hidden;
  overflow-y: scroll;
  position: sticky;
  background-color: ${theme.navy};
  ${(props) =>
    css`
      opacity: ${(props) => (props.validModal ? 0.7 : 1)};
    `}
`;

const RightContainer = styled.div`
  width: 30%;
  height: 45%;
  top: 10%;
  right: 4%;
  position: absolute;
  padding: 30px;
  background-color: rgba(12, 12, 12, 0.6);
  border-radius: 8px;

  .content {
    color: white;
  }
`;

const Title = styled.div`
  margin: 20px 13px;
  color: ${theme.white};
  font-family: ${theme.fontNumber};

  h1 {
    font-size: 30px;
  }

  span {
    margin: 30px 0;
    display: block;
    line-height: 20px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.5);
  }

  ul {
    width: 300px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const InserBtn = styled.div`
  width: 55%;
  height: 45px;
  margin: 100px;
  right: 0;
  left: 0;
  bottom: 0px;
  position: absolute;
  ${flexCenter};
  font-weight: bold;
  font-size: 18px;
  font-family: ${theme.fontNumber};
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(239, 97, 68, 0.5);
  border: 1px solid ${theme.orange};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255);
    background-color: ${theme.orange};
    transition: 0.5s;
  }
`;

const Profile = styled.div`
  width: 300px;
  height: 80px;
  margin: 50px 0px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(12, 12, 12, 0.6);
  border-radius: 20px;

  span {
    margin-left: 20px;
    font-size: 15px;
    color: ${theme.white};
  }

  .edit {
    margin-left: 130px;
    font-size: 20px;
  }
`;

const DataContainer = styled.div`
  margin: 90px;
  width: 53%;
  color: ${theme.white};

  .title {
    font-size: 30px;
    font-family: ${theme.fontNumber};
  }

  .addedData {
    display: flex;

    .inline {
      display: flex;
    }
  }
  .setBackground {
    background-color: ${theme.navy};
  }
  .emptyData {
    margin-top: 200px;
    ${flexCenter}
    flex-direction:column;
    font-family: ${theme.fontNumber};
    font-size: 30px;

    .emptyIcon {
      margin-bottom: 40px;
      font-size: 60px;
      color: ${theme.orange};
    }
  }
`;

const CartList = styled.div`
  margin-top: 170px;
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
