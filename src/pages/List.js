import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { blue } from "../styles/theme";

const List = () => {
  const navigate = useNavigate();
  const handleWrite = () => {
    navigate("/write");
  };
  return (
    <ListBlock>
      <div className="outer-container">
        <div className="inner-container">
          <div className="board-title-align">
            <div className="board-title">
              <strong>게시판</strong>
              <p>필요한 내용을 적어주세요</p>
            </div>
            <div>
              <button onClick={handleWrite} className="write">
                글쓰기
              </button>
            </div>
          </div>
          <div className="board-list-warp">
            <div className="board-list">
              <div className="top">
                <div className="num">NO</div>
                <div className="subject">제목</div>
                <div className="user">작성자</div>
                <div className="time">시간</div>
              </div>
              <div>
                <div className="num">1</div>
                <div className="subject">글이 들어갑니다</div>
                <div className="user">user1</div>
                <div className="time">time</div>
              </div>
            </div>
            <div className="board- page"></div>
            <div className="btn-wrap">
              <button className="on">목록</button>
              <button>수정</button>
            </div>
          </div>
        </div>
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
      margin: 0 auto;
      border: 1px solid ${blue};
      color: ${blue};
      border-radius: 10px;
      width: 80%;
      height: 500px;
      .board-title-align {
        display: flex;
        justify-content: space-between;
        margin: 30px 30px 0px 20px;
        .board-title {
          margin-bottom: 5px;
        }
        .board-title strong {
          font-size: 40px;
        }
        .write {
          background: transparent;
          color: ${blue};
          font-size: 30px;
          border: 1px solid ${blue};
          border-radius: 5px;
          &:hover {
            background: ${blue};
            color: #fff;
          }
        }
      }

      .btn-wrap {
        margin-top: 30px;
        text-align: center;
        font-size: 0px;
      }
      .btn-wrap button {
        display: inline-block;
        min-width: 80px;
        padding: 10px;
        margin-left: 10px;
        background-color: #000;
        color: ${blue};
        border: 1px solid ${blue};
        border-radius: 2px;
        font-size: 15px;
      }
      .btn-warp button:first-child {
        margin-left: 0px;
      }
      .board-list .top {
        width: 100%;
        border-top: 1px solid ${blue};
      }
      .board-list > div > div {
        display: inline-block;
        text-align: center;
        padding: 15px 0px;
        font-size: 15px;
      }

      .num {
        width: 10%;
      }
      .subject {
        width: 60%;
      }
      .time {
        width: 15%;
      }
      .user {
        width: 15%;
      }
    }
  }
`;
export default List;
