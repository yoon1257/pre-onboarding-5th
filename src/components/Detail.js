import React from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import { blue } from "../styles/theme";

const Detail = () => {
  const location = useLocation("");
  console.log("ahk", location);
  return (
    <>
      <DetailBlock>
        <div className="outer-container">
          <div className="inner-container">
            <div className="title-container">
              <strong className="title">제목</strong>
              <p className="time">시간</p>
            </div>
            <div className="context">내용</div>
          </div>
        </div>
      </DetailBlock>
    </>
  );
};
const DetailBlock = styled.div`
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
      border: 1px solid ${blue};
      color: ${blue};
      border-radius: 10px;
      width: 80%;
      height: 500px;
      .title-container {
        margin: 30px;
        .title {
          font-size: 35px;
        }
        .time {
          font-size: 20px;
        }
      }
      .context {
        width: 80%;
        height: 60%;
        margin: 0 auto;
        border: 1px solid ${blue};
        border-radius: 5px;
        font-size: 20px;
      }
    }
  }
`;
export default Detail;
