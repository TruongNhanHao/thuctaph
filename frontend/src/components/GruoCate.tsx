import React, { useEffect } from 'react';
import styled from 'styled-components';
import Bg1 from '../img/bgpk1.png';
import Bg2 from '../img/bgpk2.png';
import Bg3 from '../img/bgpk3.png';
import Bg4 from '../img/bgpk4.png';
import Bg5 from '../img/bgpk5.png';
import Bg6 from '../img/pk2.png';
import Bg7 from '../img/pk1.png';
import Bg8 from '../img/pk3.png';
import Bg9 from '../img/pk4.png';
import Bg10 from '../img/pk5.png';

type FlexProps = {
  direction?: any;
};
type CSS = {
  im?: any;
};
export const GruopCate = () => {
  const [limit, setLimit] = React.useState<number>(0);

  const [offset, setOffset] = React.useState<boolean>(false);
  useEffect(() => {
    window.onscroll = () => {
      console.log(Math.floor(window.pageYOffset));
      if (window.pageYOffset > 88 + 154) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    };
  }, []);
  const handleOnscroll = (i: number) => {
    if (i === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setLimit(0);
    } else if (i === 1) {
      window.scrollTo({ top: 839, behavior: 'smooth' });
      setLimit(1);
    } else if (i === 2) {
      window.scrollTo({ top: 2153, behavior: 'smooth' });
      setLimit(2);
    } else if (i === 3) {
      window.scrollTo({ top: 3468, behavior: 'smooth' });
      setLimit(3);
    } else if (i === 4) {
      window.scrollTo({ top: 4784, behavior: 'smooth' });
      setLimit(4);
    }
  };
  return (
    <C>
      <Wrapper>
        <Item direction={Bg1}>
          <p>Phụ kiện</p>
          <p>Phone, Table</p>
        </Item>
        <Item direction={Bg2}>
          <p>Phụ kiện</p>
          <p>Laptop, PC</p>
        </Item>
        <Item direction={Bg3}>
          <p>Thiết bị</p>
          <p>Âm thanh</p>
        </Item>
        <Item direction={Bg4}>
          <p>Phụ kiện</p>
          <p>Công nghệ</p>
        </Item>
        <Item direction={Bg5}>
          <p>Phụ kiện</p>
          <p>Gaming</p>
        </Item>
      </Wrapper>
      <None className={offset === true ? 'onm' : ''}>
        <div onClick={() => handleOnscroll(0)}>
          <Img im={Bg6} />
          <p className={limit === 0 ? 'active' : ''}>Deal Sốc</p>
        </div>
        <div onClick={() => handleOnscroll(1)}>
          <Img im={Bg7} />
          <p className={limit === 1 ? 'active' : ''}>Tay Nghe</p>
        </div>
        <div onClick={() => handleOnscroll(2)}>
          <Img im={Bg8} />
          <p className={limit === 2 ? 'active' : ''}>Pin Cục</p>
        </div>
        <div onClick={() => handleOnscroll(3)}>
          <Img im={Bg9} />
          <p className={limit === 3 ? 'active' : ''}>Thiết bị</p>
        </div>
        <div onClick={() => handleOnscroll(4)}>
          <Img im={Bg10} />
          <p className={limit === 4 ? 'active' : ''}>Gaming</p>
        </div>
      </None>
    </C>
  );
};
const C = styled.div`
  z-index: 999;
  .onm {
    display: flex;
    top: 0;
    position: fixed;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  height: 166px;
  padding: 0 158px;
  justify-content: space-between;
  display: flex;
  background-color: #ffe45f;
  margin-bottom: 40px;
`;
const Item = styled.div<FlexProps>`
  display: block;
  width: 232px;
  height: 126px;
  margin-top: 20px;
  cursor: pointer;
  background: url(${(props: any) => props.direction});
  :hover {
    color: #448aff;
  }
  p {
    width: 100px;
    text-align: center;
    margin-left: 114px;
    font-weight: 700;
    :not(:last-child) {
      margin-top: 38px;
    }
  }
`;
const None = styled.div`
  display: none;
  z-index: 999;
  padding: 0 158px;
  background-color: black;
  justify-content: space-around;
  height: 106px;
  div {
    /* display: block; */
    width: 86px;
    height: 64px;
    text-align: center;
    cursor: pointer;
    p {
      color: white;
      font-weight: 700;
      margin-top: -4px;
    }
    .active {
      color: #2979ff;
    }
  }
`;
const Img = styled.div<CSS>`
  background: url(${(props: any) => props.im});
  width: 64px;
  display: block;
  margin: 10px;
  background-repeat: no-repeat;
`;
