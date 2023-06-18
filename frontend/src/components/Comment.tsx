import React from 'react';
import { Flex, Navbar } from 'responsive';
import styled from 'styled-components';
import ava from '../img/Page.png';
interface Props {}

export const Comment = (props: Props) => {
  return (
    <>
      <h3>Đánh giá sản phẩm</h3>
      <Raiting>
        <Overview>
          4.3 tren 5
          <br />
          <Icon>
            <ImgIcon />
            <ImgIcon />
            <ImgIcon />
            <ImgIcon />
          </Icon>
        </Overview>
        <Content>
          <div>Tất cả</div>
          <div>5 sao (2k2)</div>
          <div>4 Sao(171)</div>
          <div>3 Sao(68)</div>
          <div>2 Sao (16)</div>
          <div>1 Sao (13)</div>
          <div>Có bình luận</div>
        </Content>
      </Raiting>
      <Cm>
        <img alt="" src={ava} />
        <C>
          <p>name</p>
          <p>Icon</p>
          <p>cm</p>
          <p>time</p>
        </C>
      </Cm>
      <Cm>
        <img alt="" src={ava} />
        <C>
          <p>name</p>
          <p>Icon</p>
          <p>cm</p>
          <p>time</p>
        </C>
      </Cm>
      <Next>
        <span>Next</span>
        <span>Prev</span>
      </Next>
    </>
  );
};
const Raiting = styled.div`
  padding: 30px;
  margin-bottom: 15px;
  background-color: white;
  ${Flex('center', '')}
`;
const Overview = styled.div`
  margin-right: 30px;
  font-size: 30px;
`;
const Content = styled.div`
  cursor: pointer;
  display: grid;
  height: 146px;
  padding-top: 30px;
  width: 700px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 2px;
  div {
    text-align: center;
    line-height: 32px;
    display: block;
    width: 100px;
    height: 32px;
    border: 1px solid red;
  }
`;
const Icon = styled.div`
  text-align: center;
`;
const ImgIcon = styled.div`
  display: inline-block;
  line-height: 30px;
  ${Navbar({
    backgroundPosition: '-205px -60px',
    height: '12px',
    width: '13px',
  })}
  &:not(:first-child) {
    margin-left: 2px;
  }
`;
const Cm = styled.div`
  display: flex;
  height: 200px;
  position: relative;
  padding: 20px 0 16px 20px;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: black;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
  }
  line-height: 24px;
`;
const C = styled.div``;
const Next = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
`;
