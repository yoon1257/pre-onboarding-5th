import React, { useState } from "react";
import styled from "styled-components";
const Main = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleIdInput = (e) => {
    const idValue = e.target.value;
    setId(idValue);
    idValue.length < 13 &&
    idValue.length >= 4 &&
    pw.length < 17 &&
    pw.length >= 8
      ? setIsValid(true)
      : setIsValid(false);
  };
  const handlePwInput = (e) => {
    const pwValue = e.target.value;
    setPw(pwValue);
    id.length < 13 &&
    id.length >= 4 &&
    pwValue.length < 17 &&
    pwValue.length >= 1
      ? setIsValid(true)
      : setIsValid(false);
  };
  return (
    <>
      <MainStyle>
        <div className="outer-container">
          <div className="inner-container">
            <h1>Login</h1>
            <div>
              <input onChange={handleIdInput}></input>
              <input onChange={handlePwInput}></input>
              <button></button>
            </div>
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
export default Main;
