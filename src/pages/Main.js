import React from "react";
import styled from "styled-components";
import Slide from "../components/Slide";

const Main = () => {
  return (
    <>
      <MainStyle>
        <div className="outer-container">
          <div className="inner-container">
            <Slide />
          </div>
        </div>
      </MainStyle>
    </>
  );
};
const MainStyle = styled.div`
  background-image: url("/images/space.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  .outer-container {
    border: 1px solid blue;
    height: 100%;
    display: flex;
    align-items: center;
    .inner-container {
      margin: 0 auto;
      border: 1px solid skyblue;
      border-radius: 10px;
      width: 80%;
      height: 500px;
    }
  }
`;
export default Main;
