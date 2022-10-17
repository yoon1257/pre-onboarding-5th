import React from "react";
import styled from "styled-components";
import { blue } from "../styles/theme";

const List = () => {
  return (
    <ListBlock>
      <div className="outer-container">
        <div className="inner-container"></div>
      </div>
    </ListBlock>
  );
};

const ListBlock = styled.div`
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
    }
  }
`;
export default List;
