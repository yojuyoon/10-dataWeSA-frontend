import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import theme, { flexCenter } from "../Styles/Theme";

function Footer({ history }) {
  return (
    <FooterStyle>
      <FooterLeftStyle>
        <ul>
          <h4>EXPLORE</h4>
          <li>PROFILES</li>
          <li>VIZ BUILDER</li>
          <li>MAPS</li>
          <li>STORIES</li>
          <li>DATA CART</li>
        </ul>
        <ul>
          <h4>SOURCES</h4>
          <li>DATA SOURCES</li>
          <li>API</li>
          <li>CLASSIFICATIONS</li>
          <li>CONTACT US</li>
        </ul>
        <ul>
          <h4>ABOUT</h4>
          <li>BACKGROUND</li>
          <li>IN THE PRESS</li>
          <li>TEAM</li>
          <li>GLOSSARY</li>
          <li>TERMS OF USE</li>
        </ul>
      </FooterLeftStyle>
      <FooterRightStyle>
        <RightContainer>
          <EmailContainer>
            <div className="email-text">
              <b>Receive updates on news, datasets, and features?</b>
            </div>
            <EmailInputContainer>
              <img alt="emailIcon" src="/images/email.png" />
              <input placeholder="your email address" />
              <div className="btn-login-container">
                <div
                  className="btn-login"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  LOGIN
                </div>
                <span>→</span>
              </div>
            </EmailInputContainer>
          </EmailContainer>
          <LogoContainer>
            <a href="http://www2.deloitte.com/us/en.html">
              <img alt="deloitte" src="/images/deloitte.png" />
            </a>
            <a href="https://www.datawheel.us/">
              <img alt="datawheel" src="/images/datawheel.png" />
            </a>
          </LogoContainer>
        </RightContainer>
      </FooterRightStyle>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  width: 100%;
  height: 340px;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.navy};
`;

const FooterLeftStyle = styled.div`
  width: 600px;
  height: 100%;
  ${flexCenter};

  ul {
    margin: 0 35px;
    height: 180px;

    h4 {
      color: white;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    li {
      color: white;
      font-size: 16px;
      margin: 15px 0;

      &:hover {
        cursor: pointer;
        color: orange;
      }
    }
  }
`;

const FooterRightStyle = styled.div`
  width: 600px;
  height: 100%;
  ${flexCenter};
`;

const RightContainer = styled.div`
  width: 600px;
  height: 200px;
`;

const EmailContainer = styled.div`
  height: 100px;

  .email-text {
    margin-bottom: 10px;

    b {
      font-size: 20px;
      color: white;
    }
  }
`;

const EmailInputContainer = styled.div`
    height: 50px;
    width: 550px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid white;

    img {
      margin: 3px 10px 0 0;
      width: 26px;
      height: 18px;
    }

    input {
      font-size: 20px;
      width: 380px;
      border: none;
      color: white;
      background-color: ${theme.navy};

      &:focus {
        outline: none;
      }
    }

    .btn-login-container {
      width: 120px;
      height: 30px;
      display: flex;
      justify-content: center;
      text-align: center;
      color: white;
      background-color: ${theme.navy};
      font-weight: bold;
      cursor: pointer;

      .btn-login {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }

      &:hover {
        span {
          animation: 0.7s moveSpan alternate infinite;
        }
      }

      span {
        font-size: 25px;
        text-align: center;
        color: white;
      }

    @keyframes moveSpan {
      100% {
        transform: translateX(10px);  
      }
    }
   }
`;

const LogoContainer = styled.div`
  width: 530px;
  height: 90px;
  display: flex;
  justify-content: space-between;

  a {
    img {
      width: 120px;
    }
  }
`;

export default withRouter(Footer);
