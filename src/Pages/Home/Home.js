import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import theme, { flexCenter } from "../../Styles/Theme";
import ColumnList from "./ColumnsComponents/ColumnList";
import HomeColumData from "./HomeColumData.json";

const Home = () => {
  const columDataList = HomeColumData;
  return (
    <>
      <HomeContainer>
        <BackGround>
          <img alt="logo-shadow" src="/images/logo-shadow.png" />
          <h1>
            <a href="https://datausa.io/visualize">EXPLORE</a>,
            <a href="https://datausa.io/map">MAP</a>, AND
            <a href="https://datausa.io/profile/geo/chicago-il/?compare=seattle-wa">
              DOWNLOAD
            </a>
            U.S. DATA
          </h1>
          <InputContainer>
            <IoIosSearch size="40" color="#ef6145" />
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
          </LogoContainer>

          <ColumnsContainer>
            {columDataList.map((columData) => (
              <ColumnList key={columData.id} columData={columData} />
            ))}
          </ColumnsContainer>
        </BackGround>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 2000px;
  background-color: ${theme.darknavy};

  img {
    height: 115px;
    width: 400px;
    margin-top: 75px;
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
      border-bottom: 5px solid hsla(0, 0%, 100%, 0.5);
      cursor: pointer;

      &:hover {
        border-bottom: 5px solid ${theme.white};
      }
    }
  }
`;

const BackGround = styled.div`
  height: 622px;
  width: 100%;
  position: absolute;
  text-align: center;
  background-image: url("https://datausa.io/images/home/bg/rocky.jpg");
  border-bottom: 1px solid #ddd;
`;

const InputContainer = styled.div`
  width: 500px;
  height: 45px;
  margin: 50px auto;
  text-align: center;
  ${flexCenter};
  background-color: ${theme.white};

  input {
    width: 500px;
    height: 45px;
    border: none;
    font-size: 20px;

    &:focus {
      outline: none;
    }
  }
`;

const SearchButton = styled.div`
  width: 100px;
  height: 45px;
  ${flexCenter};
  font-weight: bold;
  font-size: 18px;
  color: ${theme.white};
  background-color: #ef6145;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  width: 600px;
  height: 45px;
  margin: 0 auto;
  text-align: center;
  ${flexCenter};

  a img {
    width: 130px;
    height: 30px;
    margin: 20px;
  }
`;

const ColumnsContainer = styled.div`
  width: 100%;
  height: 600px;
  margin: 300px auto;
  ${flexCenter};
`;

export default Home;
