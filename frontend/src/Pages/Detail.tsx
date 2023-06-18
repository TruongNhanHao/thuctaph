import { CardPage } from 'components/CardPage';
import Footer from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { NavbarMain } from 'components/NavbarMain';
import { ProductDetail } from 'components/ProductDetail';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { publicRequest } from 'requestMethods';
import { Block, Flex, ipad, Navbar as Nav } from 'responsive';
import styled from 'styled-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Evaluate from 'components/Evaluate';
import PrimaryButton from 'components/PrimaryButton';
export const Detail = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = React.useState<any>('');
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${id}`);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  console.log(product);
  return (
    <>
      <Navbar />
      <NavbarMain />
      <Container>
        <Wrapper>
          <Items>
            <Break>
              <b>Home page </b>
            </Break>
            <NavigateNextIcon className="icon" />
            <Break>
              <b>Điện thoại</b>
            </Break>
            <NavigateNextIcon className="icon" />
            <Break>
              <b>{product === '' ? '' : 'Điện thoại ' + product.hang}</b>
            </Break>
          </Items>
          <Title>
            <div className="Left">
              <h3>{product === '' ? '' : product.title}</h3>
              <Details>
                <div className="yes" />
                <div className="yes" />
                <div className="yes" />
                <div className="no" />
                <div className="no" />
                <span>423 Đánh giá</span>
              </Details>
            </div>
            <div className="Right">
              <PrimaryButton
                title={'Thích 487'}
                to="/"
                fb
                leftIcon={<ThumbUpIcon sx={{ fontSize: 22 }} />}
              />
              <PrimaryButton title={'Chia sẽ'} to="/" fb />
            </div>
          </Title>
          <ProductDetail product={product} />
          <CardPage />
          <Evaluate />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  ${ipad({ justifyContent: 'left' })}
`;
const Wrapper = styled.div`
  width: 1200px;
  min-width: 820px;
`;

const Items = styled.div`
  ${Block('100%', '44px', 'white')}
  display: flex;
  color: #42b9f0;
  .icon {
    height: 44px;
    line-height: 44px;
  }
`;
const Break = styled.h5`
  line-height: 20px;
  margin-top: 2px;
  b {
    height: 44px;
    line-height: 40px;
  }
`;

const Title = styled.div`
  ${Flex('center', 'space-between')}
  .Right {
    ${Flex('center', 'space-between')};
  }
`;
const Details = styled.div`
  margin: 5px 0 0;
  div {
    display: inline-block;
    margin-top: 10px;
    margin-left: 2px;
  }
  .yes {
    ${Nav({
      backgroundPosition: '-205px -60px',
      height: '12px',
      width: '13px',
    })}
  }
  .no {
    ${Nav({
      backgroundPosition: '-225px -60px',
      height: '12px',
      width: '13px',
    })}
  }
  span {
    &:not(:first-child) {
      margin-left: 30px;
      color: #000000;
      font-size: 15px;
      text-decoration: underline;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: -14px;
        ${Block('1px', '20px', 'black')}
      }
    }
  }
`;
