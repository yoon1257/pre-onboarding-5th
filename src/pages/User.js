import React from "react";
import styled from "styled-components";
import { blue } from "../styles/theme";
import { ChartPie } from "../components/ChartPie";

const User = () => {
  return (
    <>
      <UserBlock>
        <div className="outer-container">
          <div className="inner-container">
            <div className="chart-pie">
              <ChartPie />
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
      .chart-pie {
        position: relative;
        width: 150px;
        height: 150px;
      }
    }
  }
`;
export default User;
