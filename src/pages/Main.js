import React from "react";
import { useNavigate } from "react-router-dom";
import { blue } from "../styles/theme";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();

  const goUser = () => {
    navigate("/user");
  };
  return (
    <>
      <MainStyle>
        <div className="outer-container">
          <div className="inner-container">
            <div>
              <h1>Login</h1>
            </div>
            <div className="align">
              <InputGroup size="lg" className="mb-3">
                <Form.Control
                  placeholder="아이디를 입력해주세요"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <InputGroup size="lg" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <Button size="lg" variant="outline-primary" onClick={goUser}>
                login
              </Button>
            </div>
          </div>
        </div>
      </MainStyle>
    </>
  );
};
const MainStyle = styled.div`
  background-image: url("/images/space.jpeg");
  background-size: cover;
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
      border-radius: 10px;
      width: 80%;
      height: 500px;
      h1 {
        text-align: center;
        margin-bottom: 100px;
        color: ${blue};
      }
      .align {
        display: flex;
        flex-direction: column;
        width: 50%;
        .input-group-text {
          color: ${blue};
          background-color: transparent;
          border: 1px solid ${blue};
        }
        .form-control {
          background-color: transparent;
          color: #fff;
          border: 1px solid ${blue};
        }
        .btn-outline-primary {
          --bs-btn-hover-bg: ${blue};
          --bs-btn-border-color: ${blue};
          --bs-btn-color: ${blue};
          --bs-btn-hover-border-color: ${blue};
        }
      }
    }
  }
`;
export default Main;
