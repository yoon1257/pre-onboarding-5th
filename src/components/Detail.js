import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { blue } from "../styles/theme";

const Detail = () => {
  const [showData, setShowData] = useState("");
  const params = Number(useParams().id);

  useEffect(() => {
    axios
      .get("data/context.json")
      .then((res) => {
        setShowData(res.data);
      })
      .catch((err) => {
        console.log("에러에러", err);
      });
  }, []);
  return (
    <>
      {showData && (
        <DetailBlock>
          <div className="outer-container">
            <div className="inner-container">
              <div className="title-container">
                <strong className="title">{showData[params - 1].title}</strong>
                <p className="time">{showData[params - 1].time}</p>
              </div>
              <div className="context">{showData[params - 1].context}</div>
            </div>
          </div>
        </DetailBlock>
      )}
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
