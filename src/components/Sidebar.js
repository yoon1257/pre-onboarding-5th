import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiPowerButton } from "react-icons/gi";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

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

  return (
    <Wrapper>
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#49cfd7" backgroundColor="#000">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Menu
            </a>
          </CDBSidebarHeader>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: "20px 5px",
              }}
            >
              <BsFillPersonFill size="48" onClick={goUser} />
              <RiFileList3Line size="48" onClick={goList} />
              <AiTwotoneSetting size="48" />
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
  .text-decoration-none {
    font-size: 28px;
  }
  .sidebar-btn-wrapper {
    height: 580px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
`;
export default Sidebar;
