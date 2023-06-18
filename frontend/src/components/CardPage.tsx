import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Block, ipad } from 'responsive';
import styled from 'styled-components';
import P from '../img/Page.png';
import { ProductItem } from './ProductItem';
interface Props {}

export const CardPage = (props: Props) => {
  const products = useSelector((state: RootStateOrAny) => state.product.products);

  return (
    <Wrapper>
      <Promo>
        <div className="C">
          <h4>Mua thêm sản phẩm khác</h4>
        </div>
        <Content>
          <B>
            {products.slice(0, 5).map((product: any, i: number) => {
              return <ProductItem key={i} product={product} />;
            })}
          </B>
        </Content>
      </Promo>
      <Page>
        <Left>
          <C>
            <img alt="" src={P} />
            <p>Yêu thích</p>
          </C>
          <W>
            <h4>Shop PN</h4>
            <p>Online 6 phút trước</p>
            <div>
              <span>Chat ngay</span>
              <span>Xem shop</span>
            </div>
          </W>
        </Left>
        <Right>
          <div>
            <p>Đánh giá:</p>
            <span>749.7k</span>
          </div>
          <div>
            <p>Tỷ lệ phản hồi:</p>
            <span>97%</span>
          </div>
          <div>
            <p>Tham gia:</p>
            <span>4 năm trước</span>
          </div>
          <div>
            <p>Thời gian Phản hồi:</p>
            <span>Vài phút</span>
          </div>
          <div>
            <p>Sản phẩm:</p>
            <span>389</span>
          </div>
          <div>
            <p>Người theo dõi:</p>
            <span>432k</span>
          </div>
        </Right>
      </Page>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 12px;
`;
const Promo = styled.div`
  padding: 24px 10px;
  ${ipad({ padding: '14px 0px' })}

  border: 1px solid #ccc;
  ${Block('', '570px', 'white')}
  .C {
    margin: 20px 12px 20px 0;
    display: flex;
  }
`;
const Content = styled.div`
  position: relative;
  overflow: hidden;
`;
const B = styled.div`
  display: inline-flex;
  object-fit: cover;
`;

const Page = styled.div`
  ${Block('', '134px', '#fff')}
  margin-top: 15px;
  padding: 25px;
  display: flex;
  border: 1px solid #ccc;
`;
const Left = styled.div`
  display: flex;
  position: relative;
  margin-right: 160px;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: -120px;
    ${Block('2px', '70px', '#ccc')}
  }
`;
const C = styled.div`
  ${Block('78px', '78px', '')}
  background-size: cover;
  position: relative;
  img {
    border-radius: 50%;
  }
  z-index: 99;
  p {
    display: block;
    position: absolute;
    ${Block('68px', '18px', '#e22929')}
    text-align: center;
    color: white;
    font-size: 14px;
    margin-top: -18px;
    margin-left: 6px;
    border-radius: 3px;
  }
`;
const W = styled.div`
  margin-left: 14px;
  p {
    font-weight: 300;
  }
  div {
    display: flex;
    margin-top: 10px;
    span {
      display: block;
      ${Block('100px', '34px', '')}
      border: 1px solid #288ad6;
      line-height: 34px;
      border-radius: 3px;
      text-align: center;
      margin-right: 15px;
    }
  }
`;
const Right = styled.div`
  cursor: pointer;
  margin-left: 20px;
  height: 80px;
  font-size: 14px;
  width: 630px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 12px;
  div {
    display: flex;
    span {
      margin-left: 8px;
      color: red;
    }
  }
`;
