import React from "react";

import styled from "styled-components";
import { blue } from "../styles/theme";

const Detail = ({}) => {
  return (
    <>
      <DetailBlock>
        <div className="outer-container">
          <div className="inner-container">
            <div>
              <strong>제목</strong>
              <p>시간</p>
            </div>
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
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      border: 1px solid ${blue};
      color: ${blue};
      border-radius: 10px;
      width: 80%;
      height: 500px;
    }
  }
`;
export default Detail;
