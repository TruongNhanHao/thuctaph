import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import { ProductItem } from './ProductItem';
import Bg3 from '../img/bgtainghe.png';
import { RootStateOrAny, useSelector } from 'react-redux';

type CSS = {
  im?: any;
};
const Phukien = () => {
  const products = useSelector((state: RootStateOrAny) => state.product.products).slice(0, 10);

  return (
    <H>
      <Img im={Bg3} />
      <Block>
        <p>Nổi bật</p>
        <p>Cáp lightning</p>
        <p>Adapter sac Type-C</p>
        <p> Adapter sạc USB</p>
        <p>Cáp Type-C</p>
      </Block>
      <C>
        {products.map((product: any) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </C>
      <PrimaryButton title={'XEM TẤT CẢ APPLE'} primary />
    </H>
  );
};
const H = styled.div`
  text-align: center;
  padding: 0 158px;
  background-color: #fff2b4;
`;
const Img = styled.div<CSS>`
  background: url(${(props: any) => props.im});
  background-repeat: no-repeat;
  margin-top: 20px;
  width: 100%;
  height: 150px;
`;
const C = styled.div`
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-row-gap: 15px;
`;
const Block = styled.div`
  display: flex;
  padding: 0 100px;
  margin: 20px;
  text-align: center;
  justify-content: space-around;
  p {
    height: 40px;
    border: 1px solid black;
    line-height: 5px;
    font-weight: 500;
    padding: 20px;
    border-radius: 40px;
  }
`;
export default Phukien;
