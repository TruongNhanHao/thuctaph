import React from 'react';
import { Block } from 'responsive';
import styled from 'styled-components';
import SpinnerStyled from './Spinner';

export const SearchItem = ({ data, loading }: any) => {
  console.log(loading, data);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return loading ? (
    <Wrapper>
      <SpinnerStyled />
    </Wrapper>
  ) : (
    <Wrapper>
      <Left>
        <Top>
          <h5>Gợi ý sản phẩm</h5>
          <div>
            {data?.map((product: any, index: any) => (
              <p key={index}>{product.title}</p>
            ))}
          </div>
        </Top>
      </Left>
      <Right>
        <hr />
        <h4>Sản phẩm được tìm nhiều</h4>
        <div>
          {data?.map((product: any, index: any) => (
            <Item key={index}>
              <img src={PF + product.img} alt="" />
              <div>
                <h5>{product.title}</h5>
                <div>
                  <p>
                    {product.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} <u>đ</u>
                  </p>
                </div>
              </div>
            </Item>
          ))}
        </div>
      </Right>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  z-index: 1000;
  position: absolute;
  ${Block('350px', '400px', '')}
  background-color: white;
  margin-top: -3px;
  border-radius: 6px;
  margin-left: -240px;
  margin-top: 444px;
  box-shadow: 0 2px 20px rgb(0 0 0 / 50%);
`;
const Left = styled.div`
  width: 350px;
  display: block;
`;
const Right = styled.div`
  margin-top: 20px;
  h4 {
    margin-left: 3px;
  }
`;
const Top = styled.div`
  height: 80px;
  margin-bottom: 2px;
  div {
    margin: 5px 5px 10px 20px;
    font-size: 13px;
    p {
      height: 17px;
      cursor: pointer;
      :hover {
        color: teal;
      }
    }
  }
  h5 {
    width: 100%;
    color: white;
    padding-left: 5px;
    background-color: teal;
  }
`;
const Item = styled.div`
  display: flex;
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid teal;
  img {
    width: 64px;
  }
  :hover {
    h5 {
      color: teal;
    }
  }
  div {
    div {
      display: flex;
      padding-top: 10px;
      font-size: 13px;
      p {
        margin-right: 10px;
        font-size: 15px;
        font-weight: 600;
        color: #cb1c22;
      }
    }
  }
`;
