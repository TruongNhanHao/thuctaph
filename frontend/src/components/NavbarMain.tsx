import React from 'react';
import { NavLink } from 'react-router-dom';
import { Block, Flex, ipad, Navbar } from 'responsive';
import styled from 'styled-components';
interface Props {}

export const NavbarMain = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Ul>
          <Li>
            <a href="/products/dienthoai">
              <Img>
                <Icondt />
              </Img>
              <span>Điện Thoại</span>
            </a>
          </Li>
          <Li>
            <NavLink to="/123">
              <Img>
                <Iconmt />
              </Img>
              <span>Laptop</span>
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/phu-kien">
              <i className="icon_giay" />
              <span>Sản phẩm mới</span>
            </NavLink>
          </Li>
          <ItemContainer>
            <Li>
              <NavLink to="/1234">
                <Img>
                  <Icondb />
                </Img>
                <Span>Tay nghe</Span>
              </NavLink>
            </Li>
            <Item className="active">
              <div>
                <ul>
                  <span>CÂU LẠC BỘ</span>
                  <hr />
                  <li>Old Trafford</li>
                  <li>St. James' Park</li>
                  <li>Vicarage Road</li>
                  <li>Molineux Stadium</li>
                  <li>St. Mary's Stadium</li>
                  <li>Emirates Stadium</li>
                </ul>
              </div>
              <div className="item2">
                <ul>
                  <span>CÂU LẠC BỘ</span>
                  <hr />

                  <li>Old Trafford</li>
                  <li>St. James' Park</li>
                  <li>Vicarage Road</li>
                </ul>
                <ul>
                  <span>CÂU LẠC BỘ</span>
                  <hr />

                  <li>Old Trafford</li>
                  <li>St. James' Park</li>
                  <li>Vicarage Road</li>
                </ul>
              </div>
              <div>
                <ul>
                  <span>CÂU LẠC BỘ</span>
                  <hr />

                  <li>Old Trafford</li>
                  <li>St. James' Park</li>
                  <li>Vicarage Road</li>
                </ul>
                <ul>
                  <span>CÂU LẠC BỘ</span>
                  <hr />

                  <li>Old Trafford</li>
                  <li>St. James' Park</li>
                  <li>Vicarage Road</li>
                </ul>
              </div>
            </Item>
          </ItemContainer>
          <Li>
            <Span>Phụ Kiện</Span>
          </Li>
          <Li>Đồng Hồ Thời Trang</Li>
        </Ul>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  ${Flex('', 'center')}
  height:44px;
  background-color: #2196f3;
  min-width: 820px;
`;
const Wrapper = styled.div`
  width: 1200px;
  font-size:16px ;
`;
const Ul = styled.ul`
  ${Flex('center', '')}
`;
const Li = styled.li`
  padding: 0 17px;
  text-align: center;
  span {
    margin-left: 4px;
  }
`;
const Img = styled.div`
  vertical-align: middle;
  display: inline-block;
`;
const Icondt = styled.div`
  ${Navbar({
    backgroundPosition: '-85px -90px',
    height: '20px',
    width: '13px',
  })}
`;
const Iconmt = styled.div`
  ${Navbar({
    backgroundPosition: '-105px -90px',
    height: '20px',
    width: '25px',
  })}
`;
const Icondb = styled.div`
  ${Navbar({
    backgroundPosition: '-165px -90px',
    height: '18px',
    width: '22px',
  })}
`;
const Span = styled.span`
  position: relative;
  margin-right: 12px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    ${Block('0', '0', '')}
    top: 43%;
    right: -22%;
    border-top: 6px solid #333;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
  }
`;
const ItemContainer = styled.div`
  position: relative;
  ${Flex('center', '')}
  height: 44px;
  z-index: 999;
  &:hover .active {
    display: flex;
    ${ipad({ display: 'block', width: '200px', top: '-230px' })}
  }
`;
const Item = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0 4px 6px #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  width: 760px;
  margin-top: 274px;

  div {
    padding: 8px 10px;
    width: 100%;
    ul {
      span {
        font-size: 15px;
        font-weight: 700;
        padding: 9px 0;
      }
      li {
        cursor: pointer;
        font-size: 13px;
        font-weight: 400;
        margin: 8px 0;
        &:last-child {
          padding-bottom: 8px;
        }
        &:hover {
          color: #448aff;
        }
      }
    }
  }
  display: none;
`;
