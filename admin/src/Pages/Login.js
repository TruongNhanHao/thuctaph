import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { NavLink } from "react-router-dom";
import bg from "../img/mushu.jpg";
import { Block, Flex, mobile } from "../responsive";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Account>
          <AccountCircleIcon sx={{ fontSize: 100 }} />
        </Account>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <P>Forgot password?</P>
          <button onClick={handleClick}>Login</button>
          {/* { && <div>Dang nhap that bai...</div>} */}
          <Icons>
            <NavLink to="/" className="icon i-facebook">
              <FacebookIcon />
            </NavLink>
            <NavLink to="/" className="icon i-github">
              <GoogleIcon />
            </NavLink>
            <NavLink to="/" className="icon i-Youtube">
              <YouTubeIcon />
            </NavLink>
          </Icons>
        </Form>
        <NavLink to="/signup">
          <H3>Create account</H3>
        </NavLink>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3)),
    url(${bg}) center;
  background-size: cover;
  ${Flex("center", "center")}
`;
const Wrapper = styled.div`
  border-radius: 4px;
  padding: 20px;
  ${Block("25%", "", "white")}
  opacity: 0.8;
  position: relative;
  ${mobile({ width: "75%" })}
  &::after {
    content: "";
    position: absolute;
    left: 150.4px;
    top: -40px;
    border-radius: 50%;
    ${Block("83px", "83px", "#00b0ff")}
  }
`;
const Account = styled.div`
  text-align: center;
  margin-top: -68px;
  position: relative;
  z-index: 999;
  opacity: 0.8;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Icons = styled.div`
  ${Flex("", "center")}
  margin: 25px 10px 10px 10px;
  .icon {
    border: 2px solid #ccc;
    ${Flex("center", "center")}
    border-radius: 50%;
    &:hover {
      transition: all 0.4s ease-in-out;
      cursor: pointer;
    }
    &:not(:last-child) {
      margin-right: 1rem;
    }
    svg {
      margin: 0.5rem;
    }
  }
  .i-facebook {
    &:hover {
      color: #0099ff;
      border: 2px solid #0099ff;
    }
  }
  .i-Youtube {
    &:hover {
      color: red;
      border: 2px solid red;
    }
  }
  .i-github {
    &:hover {
      color: #468753;
      border: 2px solid #468753;
    }
  }
`;
const Input = styled.input`
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const P = styled.p`
  padding: 6px;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const H3 = styled.div`
  text-decoration: underline;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;
