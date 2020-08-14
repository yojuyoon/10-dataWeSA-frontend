import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import theme from "../../Styles/Theme";

function Item({ item, removeFromCart }) {
  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <AddedDataContainer>
      <div className="addedData">
        <img alt="img" src={item.src} />
      </div>
      <div className="addedDataName">
        <h4>
          <strong>{item.title}</strong>
        </h4>
      </div>
      <button className="delBtn" onClick={handleRemove}>
        <FontAwesomeIcon className="searchIcon" icon={faMinus} />
      </button>
    </AddedDataContainer>
  );
}
export default connect(null, { removeFromCart })(Item);

const AddedDataContainer = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${theme.fontContent};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  box-shadow: 10px 10px 10px rgba(12, 12, 12, 0.4);

  .addedData {
    width: 60px;
    cursor: pointer;

    img {
      padding: 10px;
      width: 300px;
    }
  }

  img:hover {
    animation: 0.8s showBig alternate infinite;
  }

  h4 {
    width: 200px;
  }

  button {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    border: none;
    background-color: ${theme.orange};
    color: white;
  }

  @keyframes showBig {
    0% {
      background-size: 100%;
      background-position: 50% 50%;
      font-size: 18px;
    }

    100% {
      background-size: 120%;
      background-position: 50% 50%;
    }
  }
`;
