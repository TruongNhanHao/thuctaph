import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  LineStyle,
  Timeline,
  // TrendingUp,
  AttachMoney,
  BarChart,
  PermIdentity,

} from "@material-ui/icons";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import { DarkModeContext } from "../context/darkModeContext";
export const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <SideBarStyled>
      <Wrapper>
        <div>
          <h3>Thông tin</h3>
          <ul>
            <NavLink to="/" className="link">
              <li>
                <LineStyle className="icon" />
                Trang chủ 
              </li>
            </NavLink>
            {/* <NavLink to="/analytics" className="link">
              <li>
                <Timeline className="icon" />
                Phân tích
              </li>
            </NavLink>
            <li>
              <TrendingUp className="icon" />
              Giảm Giá
            </li>
            <li>
              <AttachMoney className="icon" />
              Giao dịch
            </li>
            <li>
              <BarChart className="icon" />
              Báo cáo
            </li> */}
          </ul>
        </div>
        <div>
          <h3>Danh sách</h3>
          <ul>
            <NavLink to="/users" className="link">
              <li>
                <PermIdentity className="icon" />
                Khách hàng
              </li>
            </NavLink>
            <NavLink to="/products" className="link">
              <li>
                <StoreIcon className="icon" />
                Sản Phẩm
              </li>
            </NavLink>
            <NavLink to="/orders" className="link">
              <li>
                <CreditCardIcon className="icon" />
                Đơn Hàng
              </li>
            </NavLink>
            <NavLink to="/providers" className="link">
            <li>
              <AttachMoney className="icon" />
              Nhà Cung Cấp
            </li>
            </NavLink>
            <NavLink to="/warehouse" className="link">
            <li>
              <BarChart className="icon" />
             Nhà Kho
            </li>
            </NavLink>
            <NavLink to="/stock" className="link">
              <li>
                <Timeline className="icon" />
               Tồn Kho
              </li>
            </NavLink>
            <li>
              <LocalShippingIcon className="icon" />
             Vận Chuyển
            </li>
          </ul>
        </div>
      
      </Wrapper>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </SideBarStyled>
  );
};
const SideBarStyled = styled.div`
  top: 50px;
  border-right: 0.5px solid rgb(230, 227, 227);
  div {
    .colorOption {
      display: flex;
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #7451f8;
      cursor: pointer;
      margin: 5px;
      &:nth-child(1) {
        background-color: whitesmoke;
      }
      &:nth-child(2) {
        background-color: #333;
      }
      &:nth-child(3) {
        background-color: darkblue;
      }
    }
  }
`;
const Wrapper = styled.div`
  width: 250px;
  padding: 20px;
  color: #555;
  h3 {
    font-size: 13px;
    color: rgb(187, 186, 186);
  }
  ul {
    list-style: none;
    padding: 5px;
    .link {
      text-decoration: none;
      color: #555;
    }
    li {
      /* width: 200px; */
      padding: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      border-radius: 10px;
      .icon {
        font-size: 18px;
        color: teal;
      }
    }
    li:hover {
      background-color: rgb(240, 240, 255);
    }
    .icon {
      margin-right: 5px;
      font-size: 20px !important;
    }
  }
`;
