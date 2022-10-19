import React from "react";
import styled from "styled-components";
import { blue } from "../styles/theme";
import { ChartPie } from "../components/ChartPie";
import ChartBar from "../components/CharBar";
import ChartLine from "../components/ChartLine";

const User = () => {
  return (
    <>
      <UserBlock>
        <div className="outer-container">
          <div className="inner-container">
            <div className="chart-container">
              <div className="chart-pie">
                <ChartPie />
              </div>
              <div className="chart-bar">
                <ChartBar />
              </div>
              <div className="chart-line">
                <ChartLine />
              </div>
            </div>
            <div className="proflie-container">
              <img
                className="proflie-style"
                alt="proflie"
                src="/images/proflie.jpeg"
              />
              <p>cording123@gmail.com</p>
            </div>
          </div>
        </div>
      </UserBlock>
    </>
  );
};
const UserBlock = styled.div`
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
      justify-content: center;
      margin: 0 auto;
      color: ${blue};
      border: 1px solid ${blue};
      border-radius: 10px;
      width: 80%;
      height: 500px;
      .chart-container {
        height: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .proflie-container {
        display: flex;
        align-items: center;
        border-top: 1px solid ${blue};
        padding: 30px;
        .proflie-style {
          width: 100px;
          height: 100px;
          border-radius: 100%;
          margin-right: 20px;
        }
      }
    }
  }
`;
export default User;
