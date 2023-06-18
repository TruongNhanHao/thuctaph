import React from 'react';
import styled from 'styled-components';
// import slides from '../data/slide'
import { Slider } from './Slider';
import champoins from '../img/right1.jpg';
import champoins2 from '../img/right2.png';
import { Block, Flex, ipad } from 'responsive';
interface Props {}

export const SlideShow = (props: Props) => {
  console.log(1);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Slider />
        </Left>
        <Right>
          <Img src={champoins} alt="" />
          <Img src={champoins2} alt="" />
        </Right>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  ${Flex('center', 'center')};
  ${ipad({ justifyContent: 'left' })}
  height:370px;
  background-color: #f8f9fa;
  `;
const Wrapper = styled.div`
 ${Flex('center', 'space-between')};
  ${ipad({   maxWidth:"820px" })}
  width: 1200px;
  padding: 10px 0;
  color: #212121;
`;
const Left = styled.div` 
  ${Block('830px', ' 350px', '#ffff8d')}
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Right = styled.div`
  ${ipad({ display: 'none' })}
  display:block ;
  text-align:center ;
  max-width:370px ;
`;
const Img = styled.img`
  ${Block('330px', '150px', '')}
  background-size: cover;
  margin-top:5px ;
  border-radius: 6px;
`;
