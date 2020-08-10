import React from "react";
import { useHistory } from "react-router-dom";
import { KakaoLogin } from "../Components/SocialLogin/KakaoLogin";
import styled from "styled-components";
import theme from "../Styles/Theme";

export default function Login() {
  let history = useHistory();

  return (
    <LoginContainer>
      <div className="backgroundColor">
        <HelloBox>
          <div className="welcome">Welcome!</div>
          <div className="hello">Hello, DATA USA</div>
          <div className="account">Don't have an account?</div>
          <div className="register">Register to access all the features of our service.</div>
          <div className="manage">Manage your business in one place. It's free!</div>
        </HelloBox>
        <LoginBox>
          <div className="loginText">LOGIN</div>
          <InputBox>
            <div className="inputInfo">Email</div>
            <input type="text" />
            <div className="inputInfo">Password</div>
            <input type="password" />
          </InputBox>
          <CheckBox>
            <input type="checkbox" />
            Stay Signed in
          </CheckBox>
          <ButtonBox>
            <button className="google">
              <img alt="구글" src="/images/google.png" />
              <span>Google Login</span>
            </button>
            <button className="facebook">
              <img alt="페이스북" src="/images/facebook.png" />
              <span>Facebook Login</span>
            </button>
            <button className="kakao" onClick={() => KakaoLogin(history)}>
              <img alt="카카오" src="/images/kakao.png" />
              <span>Kakaotalk Login</span>
            </button>
          </ButtonBox>
        </LoginBox>
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/usa.jpg");
  background-size: 100%;
  .backgroundColor {
    width: 100%;
    height: 100%;
    background-color: rgba(20, 27, 46, 0.5);
    display: flex;
    justify-content: space-between;
  }
`;

const HelloBox = styled.div`
  width: 40%;
  height: 100vh;
  margin-left: 15%;

  div {
    font-family: ${theme.fontTitle};
    color: ${theme.white};
    text-shadow: 2px 2px 10px ${theme.navy};
    &.welcome {
      padding-top: 20%;
      font-size: 40px;
    }
    &.hello {
      padding-top: 7%;
      font-size: 100px;
    }
    &.account {
      padding-top: 30%;
      font-size: 50px;
    }
    &.register {
      padding-top: 2%;
      font-size: 20px;
    }
    &.manage {
      font-size: 20px;
    }
  }
`;

const LoginBox = styled.div`
  width: 35%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 7% 5% 5% 5%;
  background-color: rgba(20, 27, 46, 0.8);
  .loginText {
    margin-bottom: 15%;
    padding-left: 4%;
    color: ${theme.white};
    font-size: 40px;
    font-weight: bold;
    font-family: ${theme.fontNumber};
  }
`;

const InputBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .inputInfo {
    font-family: ${theme.fontContent};
    color: ${theme.lightgrey};
  }
  input {
    width: 100%;
    height: 15%;
    margin-bottom: 10%;
    color: ${(props) => props.theme.white};
    border: none;
    border-bottom: 1.5px solid ${theme.grey};
    font-family: ${theme.fontContent};
    background-color: rgba(0, 0, 0, 0);
    &::placeholder {
      color: ${theme.white};
    }
    &:focus {
      outline: none;
    }
  }
`;

const CheckBox = styled.div`
  margin-bottom: 50%;
  padding-left: 4%;
  color: ${theme.white};

  input {
    margin-right: 3%;
  }
`;

const ButtonBox = styled.div`
  width: 90%;
  margin-top: 15%;
  margin: 10% auto 0;
  button {
    width: 100%;
    height: 40%;
    margin-bottom: 2%;
    border: none;
    padding-left: 5%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    img {
      width: 10%;
    }
    span {
      margin-left: 3%;
      font-family: ${theme.fontContent};
      font-size: 16px;
      font-weight: bold;
      color: ${theme.white};
    }
    &.google {
      background-color: #dd4b39;
    }
    &.facebook {
      background-color: #4266b2;
    }
    &.kakao {
      background-color: #f3db00;
      padding-left: 6%;
      img {
        width: 7%;
      }
    }
  }
`;
