import React from "react";
import styled from "styled-components";
import ChartLine from "../components/ChartLine";
import Slide from "../components/Slide";

const User = () => {
  return (
    <>
      <MainStyle>
        <div className="outer-container">
          <div className="inner-container">
            <ChartLine />
          </div>
        </div>
      </MainStyle>
    </>
  );
};
const MainStyle = styled.div`
  /* background-image: url("/images/space.jpeg"); */
  background-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  .outer-container {
    border: 1px solid blue;
    height: 100%;
    display: flex;
    align-items: center;
    .inner-container {
      display: flex;
      margin: 0 auto;
      border: 1px solid skyblue;
      border-radius: 10px;
      width: 80%;
      height: 500px;
    }
  }
`;
export default User;
