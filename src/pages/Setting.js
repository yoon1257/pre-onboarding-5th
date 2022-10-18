import React from "react";
import styled from "styled-components";
import { blue } from "../styles/theme";

const Setting = () => {
  return (
    <>
      <SettingBlock>
        <div className="outer-container">
          <div className="inner-container">
            <h1>setting</h1>
            <span>개인정보를 설정할 수 있는 공간입니다.</span>
            <img
              alt="cat-drawing-proflie"
              src="/images/proflie.jpeg"
              className="proflie-style"
            />
          </div>
        </div>
      </SettingBlock>
    </>
  );
};
const SettingBlock = styled.div`
  background-image: url("/images/space.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  .outer-container {
    border-left: 1px solid ${blue};
    height: 100%;
    display: flex;
    align-items: center;
    .inner-container {
      display: flex;
      margin: 0 auto;
      border: 1px solid ${blue};
      border-radius: 10px;
      width: 80%;
      height: 500px;
      h1 {
        color: ${blue};
      }
      span {
        color: ${blue};
      }
      .proflie-style {
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
    }
  }
`;
export default Setting;
