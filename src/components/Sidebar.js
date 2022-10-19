import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiPowerButton } from "react-icons/gi";
import { CDBSidebar, CDBSidebarFooter, CDBSidebarHeader } from "cdbreact";
import { blue } from "../styles/theme";

const Sidebar = () => {
  const navigate = useNavigate();
  const goUser = () => {
    navigate("/user");
  };
  const goList = () => {
    navigate("/list");
  };
  const goMain = () => {
    navigate("/");
  };
  const goSetting = () => {
    navigate("/setting");
  };

  return (
    <Wrapper>
      <div className="align" style={{}}>
        <CDBSidebar className="menu-bar">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none">
              Menu
            </a>
          </CDBSidebarHeader>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div className="sidebar-btn-wrapper">
              <BsFillPersonFill size="48" onClick={goUser} />
              <RiFileList3Line size="48" onClick={goList} />
              <AiTwotoneSetting size="48" onClick={goSetting} />
              <GiPowerButton size="48" onClick={goMain} />
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  float: left;
  .align {
    display: flex;
    height: 100vh;
    overflow: scroll initial;
  }
  .menu-bar {
    color: ${blue};
    background-color: #fff;
  }
  .text-decoration-none {
    font-size: 28px;
    color: inherit;
  }
  .sidebar-btn-wrapper {
    height: 580px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 5px;
    align-items: center;
    cursor: pointer;
  }
`;
export default Sidebar;
