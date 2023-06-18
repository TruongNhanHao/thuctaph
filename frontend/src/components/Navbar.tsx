import React, { useEffect } from 'react';
import styled from 'styled-components';
// import LogoImg from '../img/bg3.png';
import LogoImg from '../img/ttdd.jpeg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { Block, Flex } from 'responsive';
import { NavLink } from 'react-router-dom';
import { Search } from './Search';
import { SearchItem } from './SearchItem';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { authAction } from 'features/auth/authSlice';
import { publicRequest } from 'requestMethods';
import PrimaryButton from './PrimaryButton';

export const Navbar = () => {
  const { isLoggedIn } = useSelector((state: RootStateOrAny) => state.auth);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>();
  const quantity = useSelector((state: RootStateOrAny) => state.cart.quantity);
  useEffect(() => {
    setLoading(true);
    const getSearch = setTimeout(async () => {
      try {
        const res = await publicRequest.get(`products/find/search/product?search=${searchTerm}`);
        setData(res.data);
        setLoading(false);
      } catch (err) {}
    }, 1000);
    return () => {
      clearTimeout(getSearch);
    };
  }, [searchTerm]);
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(dispatch(authAction.logout()));
    localStorage.removeItem('login');
  };
  return (
    <Container onClick={() => setSearchTerm('')}>
      {/* <Container onClick={() => setSearchTerm('')}  onClickOutside={()=>console.log('hi')}> */}
      <Wrapper>
        <Left>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <Search setSearchTerm={setSearchTerm}></Search>
        </Left>
        <Right>
          <PrimaryButton
            title={'Giỏ Hàng'}
            to="/carts"
            nav
            leftIcon={quantity ? <p>{quantity}</p> : <AddShoppingCartIcon sx={{ fontSize: 22 }} />}
          />
          <PrimaryButton
            title={'Lịch sử mua hàng'}
            to="/orders"
            nav
            leftIcon={<NotificationAddIcon sx={{ fontSize: 22 }} />}
          />
          {isLoggedIn && (
            <NavLink to="/login" className="Login">
              <Span onClick={handleClick}>Đăng xuất</Span>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink to="/login" className="Login">
              <Span>Đăng Nhập</Span>
            </NavLink>
          )}
        </Right>
      </Wrapper>
      {searchTerm && <SearchItem data={data} loading={loading} />}
    </Container>
  );
};

const Container = styled.div`
  ${Flex('center', 'center')}
  height:44px;
  min-width: 820px;
  background-color: black;
`;
const Wrapper = styled.div`
  ${Flex('center', 'space-between')};
  width: 1200px;
  color: white;
  font-size: 14px;
  font-weight: 300;
`;
const Left = styled.div`
  ${Flex('center', '')}
`;
const Logo = styled.img`
  background: url(${LogoImg}) center;
  background-size: cover;
  margin: 0;
  border: 0;
  ${Block('300px', '44px', '')}
`;
const Right = styled.div`
  ${Flex('center', '')}
`;
const Span = styled.span`
  width: 100px;
  text-align: center;
  font-size: 13px;
  line-height: 44px;
  display: block;
  position: relative;
  margin-left: 10px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    margin-bottom: 8px;
    ${Block('1px', '34px', '#626262')}
    opacity: 0.7;
  }
  &:hover {
    color: #2979ff;
    cursor: pointer;
  }
`;
