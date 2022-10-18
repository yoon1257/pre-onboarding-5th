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
          </div>
        </div>
      </UserBlock>
    </>
  );
};
const UserBlock = styled.div`
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
      .chart-container {
        display: flex;
        justify-content: center;
        .chart-pie {
          width: 40%;
          height: 150px;
        }
        .chart-bar {
          width: 35%;
          height: 300px;
        }
        .chart-line {
          width: 35%;
          height: 400px;
        }
      }
    }
  }
`;
export default User;
