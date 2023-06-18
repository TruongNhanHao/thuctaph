import React from 'react';
import { NavLink } from 'react-router-dom';
import { Block, Navbar } from 'responsive';
import styled from 'styled-components';
import icon1 from '../img/icon1-50x50.png';
export const ProductItem = (product: any) => {
  const { _id, title,  discount, count, evaluate,  img } = product.product;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <Container className="mg">
      <NavLink to={`/product/${_id}`}>
        <Installment>Trả góp 0%</Installment>
        <Img src={PF + img} alt="" className="ho" />
        <Ceremony>
          <img alt="" src={icon1} />
          <span>Sinh viên giá tốt</span>
        </Ceremony>
        <Name>
          {title}
          <span> 64GB</span>
        </Name>
        <Ram>
          <div>32GB</div>
          <div>64GB</div>
        </Ram>
        <Discount>
          {discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <u>đ</u>
        </Discount>
        <Count>
          {count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <u>đ</u>
        </Count>
        <Icon>
          <ImgIcon />
          <ImgIcon />
          <ImgIcon />
          <ImgIcon />
          <span>{evaluate}</span>
        </Icon>
       
      </NavLink>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 10px 15px;
  border:1px solid #ccc;
  margin:10px 0 ;
  font-size: 14px;
  ${Block('230px', '420px', 'white')}
  cursor: pointer;
  &:hover .ho {
    transform: translateY(-10px);
  }
`;
const Ram = styled.div`
  margin:5px 0 ;
  div{
    padding: 5px 8px !important;
    border: 1px solid #e0e0e0 !important;
    border-radius: 2px;
    color: #333;
    display: inline-flex !important;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 5px;
    margin-right: 4px;
  }
  div:hover{
    box-shadow: 0 2px 12px rgb(0 0 0 / 12%);
    border-color: #2f80ed !important;
    color: #2f80ed !important;
  }
`;
const Installment = styled.div`
  ${Block('64px', '14px', '#f1f1f1')}
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  border-radius: 2px;
`;
const Img = styled.img`
  height: 200px;
  display: block;
  margin-top: 16px;
  transform: translateY(2px);
  transition: all 0.3s ease-in-out;
`;
const Ceremony = styled.div`
  display: flex;
  ${Block('130px', '20px', 'red')}
  margin-top: 5px;
  border-radius: 10px;
  font-size: 11px;
  img {
    background-size: cover;
    background-repeat: no-repeat;
    ${Block('20px', '20px', '')}
  }
  span {
    display: block;
    margin-left: 3px;
    line-height: 20px;
    color: white;
  }
`;
const Name = styled.p`
  margin-bottom: 5px;
  width: 200px;
  overflow: hidden;
  font-size: 12px;
  margin-top: 6px;
  span {
    font-size: 12px;
    margin-bottom: 5px;
  }
  &:hover {
    color: #448aff;
  }
`;
const Discount = styled.p`
  text-decoration: line-through;
  position: relative;
  font-weight: 400;
  line-height:14px ;
  font-size: 12px;
`;
const Count = styled.h4`
  margin-bottom: 5px;
  position: relative;
  font-weight: 700;
`;
const Icon = styled.div`
  span {
    margin-left: 8px;
    font-size: 11px;
  }
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
