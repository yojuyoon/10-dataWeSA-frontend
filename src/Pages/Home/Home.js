import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import theme, { flexCenter } from "../../Styles/Theme";
import ColumnList from "./ColumnsComponents/ColumnList";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <BackGround>
          <img
            className="backgroundImg"
            alt="logo-shadow"
            src="/images/logo-shadow.png"
          />
          <h1>
            <a href="https://datausa.io/visualize">EXPLORE</a>,
            <a href="https://datausa.io/map">MAP</a>, AND
            <a href="https://datausa.io/profile/geo/chicago-il/?compare=seattle-wa">
              DOWNLOAD
            </a>
            U.S. DATA
          </h1>
          <InputContainer>
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            <input placeholder="ex. California, Hostpitals, Graphic Design" />
            <SearchButton>Search</SearchButton>
          </InputContainer>
          <LogoContainer>
            <a href="http://www2.deloitte.com/us/en.html">
              <img alt="deloitte" src="/images/deloitte.png" />
            </a>
            <a href="http://www2.deloitte.com/us/en.html">
              <img alt="datawheel" src="/images/datawheel.png" />
            </a>
            <div className="gradient"></div>
          </LogoContainer>
          <ColumnsContainer>
            <ColumnList />
          </ColumnsContainer>
        </BackGround>
      </HomeContainer>
      <ColumnBackground />
    </>
  );
};

const HomeContainer = styled.div`
  .gradient {
    width: 100%;
    height: 600px;
    position: absolute;
    background-image: linear-gradient(
      rgba(20, 27, 46, 0),
      rgba(20, 27, 46, 0),
      rgb(20, 27, 46)
    );
  }
  height: 600px;
  border-bottom: 1px solid #ddd;
  .backgroundImg {
    width: 400px;
    margin-top: 100px;
  }

  h1 {
    margin-top: 25px;
    font-size: 30px;
    font-weight: bold;
    font-family: ${(props) => props.theme.fontContent};
    color: ${theme.white};
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.8);

    a {
      margin: 0 5px;
      text-decoration: none;
      color: ${theme.white};
      border-bottom: 3px solid hsla(0, 0%, 100%, 0.5);
      cursor: pointer;

      &:hover {
        border-bottom: 5px solid ${theme.white};
      }
    }
  }
`;

const BackGround = styled.div`
  height: 100%;
  background-size: cover;
  text-align: center;
  background-image: url("https://datausa.io/images/home/bg/rocky.jpg");
`;

const InputContainer = styled.div`
  width: 500px;
  height: 45px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.white};

  input {
    width: 500px;
    height: 45px;
    border: none;
    font-size: 17px;

    &:focus {
      outline: none;
    }
  }

  .searchIcon {
    margin-left: 10px;
    font-size: 25px;
    color: ${theme.orange};
  }
`;

const SearchButton = styled.div`
  width: 100px;
  height: 45px;
  right: 0;
  ${flexCenter};
  font-weight: bold;
  font-size: 18px;
  color: ${theme.white};
  background-color: #ef6145;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  width: 600px;
  margin: 50px auto 200px auto;
  ${flexCenter};

  a img {
    width: 180px;
    z-index: 999;
  }
`;

const ColumnsContainer = styled.div`
  width: 100vw;
  height: 100%;
  top: 500px;
  position: absolute;

  .columns-absolute {
    width: 90%;
    margin: 0 auto;
    ${flexCenter};
  }
`;

const ColumnBackground = styled.div`
  height: 1400px;
  background-color: ${theme.navy};
`;

export default Home;
