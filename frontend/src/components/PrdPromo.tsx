import React from 'react';
import { Arrows, Block, ipad } from 'responsive';
import styled from 'styled-components';
import GS from '../img/GiangSinh.png';
import { ProductItem } from './ProductItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { RootStateOrAny, useSelector } from 'react-redux';

export const PrdPromo = () => {
  const Products = useSelector((state: RootStateOrAny) => state.product.products.slice(0, 9));

  const [limit, setLimit] = React.useState<number>(5);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const handleClick = (direction: string, lim: number, i: number, dis: any) => {
    let distance = Math.floor(
      dis.getBoundingClientRect().x -
        Math.floor(containerRef.current ? containerRef.current.getBoundingClientRect().x : 0) -
        5
    );
    if (direction === 'Left') {
      if (distance === 0) {
        dis.style.transform = `translateX(${
          -10 * (Products.length - i) - 228 * (Products.length - i) + distance
        }px)`;
        setLimit(Products.length - i);
      } else if (lim % i !== 0) {
        dis.style.transform = `translateX(${
          -10 * (Products.length % i) - 228 * (Products.length % i) + distance
        }px)`;
        setLimit(Products.length - (Products.length % i));
      } else {
        dis.style.transform = `translateX(${10 * i + 228 * i + distance}px)`;
        setLimit(lim - i);
      }
    } else if (direction === 'Right') {
      if (lim % i === 0 && lim + i < 10) {
        console.log(3);
        dis.style.transform = `translateX(-1170px)`;
        setLimit(lim + i);
      } else if (Products.length === limit) {
        console.log(1);
        dis.style.transform = `translateX(0)`;
        setLimit(5);
      }
    }
    console.log(distance, limit, i);
  };
  console.log(Products);
  return (
    <Container>
      <Wrapper>
        <Img />
        <Arrow className="ho">
          <ArrowBackIosIcon
            className="Left"
            onClick={() => handleClick('Left', limit, 5, listRef.current!)}
          />
          <ArrowForwardIosIcon
            className="Right"
            onClick={() => handleClick('Right', limit, 5, listRef.current!)}
          />
        </Arrow>
        <Slide ref={containerRef}>
          <C ref={listRef}>
            {Products?.map((product: any, i: number) => {
              return <ProductItem key={i} product={product} />;
            })}
          </C>
        </Slide>
      </Wrapper>
    </Container>
  );
};
// console.log(Products);
const Container = styled.div`
  display: flex;
  justify-content: center;
  ${ipad({ justifyContent: 'left' })}
  height: 600px;
`;
const Wrapper = styled.div`
  ${Block('1200px', '540px', '#b11117')}
  min-width: 820px;
  &:hover .ho {
    display: block;
  }
`;
const Img = styled.div`
  ${Block('', '90px', '')}
  background: url(${GS}) center;
  background-size: cover;
`;
const Slide = styled.div`
  position: relative;
  overflow: hidden;
  margin: -5px 12px 0 12px;
  transform: translateX(0px);
`;
const C = styled.div`
  transition: all 0.4s ease;
  display: inline-flex;
  object-fit: cover;
  width: 1170px;
  margin-left: 5px;
  .mg {
    width: 224px;
    margin: 0 5px;
    border: none;
  }
`;
const Arrow = styled.div`
  position: relative;
  cursor: pointer;
  display: none;
  .Left {
    ${Arrows('155px')}
    ${Block('34px', '60px', '#FAFAFA')}
    text-align: center;
    border-radius: 0 4px 4px 0;
  }
  .Right {
    ${Arrows('155px')}
    right: 0;
    ${Block('34px', '60px', '#FAFAFA')}
    border-radius: 4px 0 0 4px;
  }
`;
