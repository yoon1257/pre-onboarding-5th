import React, { useState } from "react";
import styled from "styled-components";
import { blue } from "../styles/theme";
import axios from "axios";

const Setting = () => {
  const [myName, setMyname] = useState(false);
  const [userName, setUserName] = useState("");
  const handleName = () => {
    setMyname((prev) => !prev);
    axios
      .patch(
        "./data.nameInfo.json/my/name",
        { name: userName },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => setUserName(""));
  };
  return (
    <>
      <SettingBlock>
        <div className="outer-container">
          <div className="inner-container">
            <h1>setting</h1>
            <span>개인정보를 설정할 수 있는 공간입니다.</span>
          </div>
        </div>
      </SettingBlock>
    </>
  );
};
const SettingBlock = styled.div`
  background-color: #fff;
  height: 100vh;
  .outer-container {
    border-left: 1px solid ${blue};
    height: 100%;
    display: flex;
    align-items: center;
    .inner-container {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      color: ${blue};
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
