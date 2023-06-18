import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import hao from "../img/mushu.jpg";
export const Topbar = () => {
  return (
    <TopbarStyled>
      <Wrapper>
        <div className="topLeft">
          <span>Quản Trị Viên</span>
        </div>
        <div className="topRight">
          <div>
            <NotificationsNone />
            <span>2</span>
          </div>
          <div>
            <Language />
            <span>2</span>
          </div>
          <div>
            <Settings />
          </div>
          <img src={hao} alt="" className="topAvatar" />
        </div>
      </Wrapper>
    </TopbarStyled>
  );
};
const TopbarStyled = styled.div`
  width: 99%;
  height: 50px;
  background-color: #f6f6f6;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topLeft {
    span {
      font-weight: bold;
      font-size: 30px;
      color: darkblue;
    }
  }
  .topRight {
    display: flex;
    align-items: center;
    div {
      margin-right: 10px;
      position: relative;
      cursor: pointer;
      color: #555;
      right: 30px;
      span {
        width: 14px;
        height: 14px;
        font-size: 10px;
        color: white;
        font-weight: 500;
        top: -5px;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: red;
        position: absolute;
      }
    }
    img {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      right: 14px;
      cursor: pointer;
    }
  }
`;
