import React from 'react';
import { Arrows, Block, Flex } from 'responsive';
import styled from 'styled-components';
import GS from '../img/dhs.png';
import { ProductItem } from './ProductItem';
// import { Dongho1, Dongho2, Dongho3 } from '../data/Dongho';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { RootStateOrAny, useSelector } from 'react-redux';
import PrimaryButton from './PrimaryButton';
interface Props {}

export const Dongho = (props: Props) => {
  const products = useSelector((state: RootStateOrAny) => state.product.products);
  const Products1 = products.slice(0, 9);
  const Products2 = products.slice(2, 9);
  const Products3 = products.slice(4, 9);

  const [limit, setLimit] = React.useState<number>(0);
  const [item, setItem] = React.useState<number>(2);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  let Products = item === 1 ? Products1 : item === 2 ? Products2 : Products3;
  const handleClick = (direction: string, lim: number, i: number, dis: any, props: any) => {
    let distance = Math.floor(dis.getBoundingClientRect().x - 412);
    if (direction === 'Left') {
      if (distance === 0) {
        dis.style.transform = `translateX(${
          -10 * (props.length - i) - 228 * (props.length - i) + distance
        }px)`;
        setLimit(props.length - i);
      } else if (lim % i !== 0) {
        dis.style.transform = `translateX(${
          10 * (props.length % i) + 228 * (props.length % i) + distance
        }px)`;
        setLimit(props.length - (props.length % i));
      } else {
        dis.style.transform = `translateX(${10 * i + 228 * i + distance}px)`;
        setLimit(lim - i);
      }
    } else if (direction === 'Right') {
      if (distance % (10 * i + 228 * i) !== 0 || limit === props.length - i) {
        dis.style.transform = `translateX(${
          10 * (props.length - i) + 228 * (props.length - i) + distance
        }px)`;
        setLimit(0);
      } else if (props.length - lim < i * 2 && props.length - lim > i) {
        dis.style.transform = `translateX(${
          -10 * (props.length % i) + -228 * (props.length % i) + distance
        }px)`;
        setLimit(props.length - (props.length % i));
      } else {
        dis.style.transform = `translateX(${-10 * i - 228 * i + distance}px)`;
        setLimit(lim + i);
      }
    }
    // console.log(distance);
  };
  // const test = (i: any) => {
  //   setItem(i);
  //   let element: any = document.querySelector('.dh');
  //   element.addEventListener("event", handler);
  // }
  // console.log(Dongho1.length);
  return (
    <Container>
      <Wrapper>
        <Img />
        <Wrapper2>
          <Arrow className="ho">
            <ArrowBackIosIcon
              className="Left"
              onClick={() => handleClick('Left', limit, 4, listRef.current!, Products)}
            />
            <ArrowForwardIosIcon
              className="Right"
              onClick={() => handleClick('Right', limit, 4, listRef.current!, Products)}
            />
          </Arrow>
          <Top>
            <div>
              {item === 1 ? (
                <PrimaryButton dh active title="Đồng hồ thông minh" />
              ) : (
                <PrimaryButton dh onClick={() => setItem(1)} title="Đồng hồ thông minh" />
              )}
              {item === 2 ? (
                <PrimaryButton dh active title="Đồng hồ thông minh" />
              ) : (
                <PrimaryButton dh onClick={() => setItem(2)} title="Đồng hồ thông minh" />
              )}
              {/* <PrimaryButton dh active onClick={() => setItem(2)} title="Đồng hồ thông minh" /> */}
              {item === 3 ? (
                <PrimaryButton dh active title="Đồng hồ cho nam" />
              ) : (
                <PrimaryButton dh onClick={() => setItem(3)} title="Đồng hồ cho nam" />
              )}
              {/* <PrimaryButton dh onClick={() => setItem(3)} title="Đồng hồ cho nam" /> */}
            </div>

            {/* <Item className={item === 3 ? 'active' : ''} onClick={() => setItem(3)}>
          Đồng hồ thời trang Nữ
        </Item>  */}
            <Discount>
              <span>Mã giảm giá: </span>
              <input placeholder="Khuyến mãi" />
            </Discount>
          </Top>

          <Slide>
            <C ref={listRef}>
              {Products.map((product: any, i: number) => {
                return <ProductItem key={i} product={product} />;
              })}
            </C>
          </Slide>
        </Wrapper2>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  ${Flex('', 'center')}
  height:580px;
  min-width: 820px;
`;
const Top = styled.div`
  ${Flex('center', 'space-between')}
  height: 80px;
  .active {
    color: black;
    background-color: white;
  }
`;
const Discount = styled.div`
  height: 80px;
  line-height: 80px;
  margin-right: 16px;
  span {
    color: #fff;
  }
  input {
    border: none;
    height: 26px;
    border-radius: 4px;
    padding-left: 5px;
  }
`;
const Wrapper = styled.div`
  ${Block('1200px', '540px', '#003743')}
  min-width: 820px;
  display: flex;
  &:hover .ho {
    display: block;
  }
`;
const Wrapper2 = styled.div`
  display: block;
  max-width: 936px;
  min-width: 790px;
`;
const Slide = styled.div`
  /* position: relative; */
  overflow: hidden;
  transform: translateX(0px);
`;
const C = styled.div`
  transition: all 0.4s ease;
  display: inline-flex;
  .mg {
    width: 224px;
    margin: 0 5px;
    border: none;
  }
`;
const Img = styled.div`
  ${Block('240px', '440px', '')}
  display:block;
  margin: 10px;
  background: url(${GS});
  background-size: cover;
`;
const Arrow = styled.div`
  position: relative;
  cursor: pointer;
  display: none;
  .Left {
    ${Arrows('235px')}
    ${Block('34px', '60px', '#ccc')}
    text-align: center;
    border-radius: 0 4px 4px 0;
  }
  .Right {
    ${Arrows('235px')}
    /* left: 907px; */
    right:0;
    ${Block('34px', '60px', '#ccc')}
    border-radius: 4px 0 0 4px;
  }
`;
