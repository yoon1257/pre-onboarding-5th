import React from "react";
import styled from "styled-components";
import { blue } from "../styles/theme";

const Write = () => {
  return (
    <WriteStyle>
      <div className="outer-container">
        <div className="inner-container">
          <div className="context-container">
            <input
              className="title"
              type="text"
              placeholder="제목을 입력해주세요"
            />
            <input className="context" placeholder="내용을 입력해주세요" />
            <button className="write-btn">작성</button>
          </div>
        </div>
      </div>
    </WriteStyle>
  );
};
const WriteStyle = styled.div`
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
      margin: 0 auto;
      border: 1px solid ${blue};
      color: ${blue};
      border-radius: 10px;
      width: 80%;
      height: 500px;
      .context-container {
        width: 100%;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title {
          width: 80%;
          height: 35px;
          margin-bottom: 20px;
          font-size: 20px;
          background-color: transparent;
          border-radius: 5px;
          border: 1px solid ${blue};
          color: #fff;
          &:focus {
            outline: none;
          }
        }
        .context {
          width: 80%;
          height: 300px;
          border-radius: 5px;
          background-color: transparent;
          border: 1px solid ${blue};
          text-align: center;
          color: #fff;
          &:focus {
            outline: none;
          }
        }
        .write-btn {
          margin-top: 30px;
          padding: 10px;
          background-color: transparent;
          border: 1px solid ${blue};
          color: ${blue};
          border-radius: 5px;
          &:hover {
            background-color: ${blue};
            color: #fff;
          }
        }
      }
    }
  }
`;
export default Write;
