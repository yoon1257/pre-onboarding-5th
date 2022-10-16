import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiPowerButton } from "react-icons/gi";

const Nav = () => {
  return (
    <Wrapper>
      <BsFillPersonFill className="user-icon" />
      <RiFileList3Line className="list-icon" />
      <AiTwotoneSetting className="setting-icon" />
      <GiPowerButton className="login-icon" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .user-icon {
    color: lightblue;
  }
  .list-icon {
    color: lightblue;
  }
  .setting-icon {
    color: lightblue;
  }
  .login-icon {
    color: lightblue;
  }
`;

export default Nav;
