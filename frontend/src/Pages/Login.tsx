import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink, useNavigate } from 'react-router-dom';
import { Block, Flex, mobile } from 'responsive';
import styled from 'styled-components';
import bg from '../img/back.jpg';
import PrimaryButton from 'components/PrimaryButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { authAction } from 'features/auth/authSlice';

export const Login = () => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const dispatch = useDispatch();
  const history = useNavigate();
  const { isLoggedIn, error } = useSelector((state: RootStateOrAny) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      history('/');
    } else {
    }
  }, [history, isLoggedIn]);
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(authAction.login({ username, password }));
  };
  // console.log(error);
  return (
    <Container>
      <Wrapper>
        <Account>
          <AccountCircleIcon sx={{ fontSize: 100 }} />
        </Account>
        <Form>
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <P>Forgot password?</P>

          <PrimaryButton onClick={handleClick} title={'SIGN IN'} primary disabled={isLoggedIn} />
          {/* <PrimaryButton primary="primary">Log in </PrimaryButton> */}
          {error && <div className="error">Đăng nhập thất bại...</div>}
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
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3)), url(${bg}) center;
  background-size: cover;
  ${Flex('center', 'center')}
`;
const Wrapper = styled.div`
  border-radius: 4px;
  padding: 40px;
  margin-left: 800px;
  ${Block('25%', '', 'white')}
  opacity: 0.8;
  position: relative;
  /* ${mobile({ width: '75%' })} */
`;
const Account = styled.div`
  text-align: center;
  margin-top: -7%;
  position: relative;
  z-index: 999;
  opacity: 0.8;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  button {
    background-color: #00aeff;
    border: none;
  }
  .error {
    color: red;
  }
`;
const Icons = styled.div`
  ${Flex('', 'center')}
  margin: 25px 10px 10px 10px;
  .icon {
    border: 2px solid #f8f9fa;
    ${Flex('center', 'center')}
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
