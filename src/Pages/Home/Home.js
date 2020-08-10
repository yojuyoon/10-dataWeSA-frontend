import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import theme, { flexCenter } from "../../Styles/Theme";
import ColumnList from "./ColumnsComponents/ColumnList";
import HomeColumnData from "./HomeColumnData.json";

const Home = () => {
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
            <div className="columns-absolute">
              {HomeColumnData.map((columnData) => (
                <ColumnList
                  key={columnData.id}
                  title={columnData.title}
                  list={columnData.list}
                  id={columnData.id}
                />
              ))}
            </div>
          </ColumnsContainer>
        </BackGround>
      </HomeContainer>
      <ColumnBackground />
    </>
  );
};

const HomeContainer = styled.div`
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
      border-bottom: 3px solid hsla(0, 0%, 100%, 0.5);
      cursor: pointer;

      &:hover {
        border-bottom: 5px solid ${theme.white};
      }
    }
  }
`;

const BackGround = styled.div`
  background-size: cover;
  text-align: center;
  background-image: url("https://datausa.io/images/home/bg/rocky.jpg");
  border-bottom: 1px solid #ddd;
`;

const InputContainer = styled.div`
  width: 500px;
  height: 45px;
  margin: 50px auto;
  ${flexCenter};
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
  margin: 50px auto 200px auto;
  ${flexCenter};

  a img {
    width: 180px;
    height: 110px;
    margin: 20px;
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
  height: 700px;
  background-color: ${theme.darknavy};
`;

export default Home;
