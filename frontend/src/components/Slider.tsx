/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { slides, slidesImg } from '../data/slide';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Arrows, Block } from 'responsive';
interface Props {}
export const Slider = (props: Props) => {
  const [limit, setLimit] = React.useState<number>(1);
  const [distance, setDistance] = React.useState<number>(0);
  const [dot, setDot] = React.useState<number>(0);
  const [conten, setContent] = React.useState<number>(0);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const dotRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let timerSlide: ReturnType<typeof setTimeout> = setTimeout(
      () => handleClick('Right', limit, 1, listRef.current!, dotRef.current!, contentRef.current!),
      2000
    );
    return () => clearTimeout(timerSlide);
  });
  const handleClick = (
    direction: string,
    lim: number,
    i: number,
    listRC: any,
    dotRC: any,
    conRC: any
  ) => {
    let distanceRef =
      Math.floor(
        listRC.getBoundingClientRect().x -
          Math.floor(containerRef.current ? containerRef.current.getBoundingClientRect().x : 0)
      ) - 830;
    let doRef =
      Math.floor(
        dotRC.getBoundingClientRect().x -
          Math.floor(containerRef.current ? containerRef.current.getBoundingClientRect().x : 0)
      ) + 166;
    let contenRef = Math.floor(
      conRC.getBoundingClientRect().x -
        Math.floor(containerRef.current ? containerRef.current.getBoundingClientRect().x : 0)
    );
    if (distanceRef % 830 === 0 && doRef % 166 === 0 && contenRef % 166 === 0) {
      direction === 'Left'
        ? limit !== 1
          ? setLimit(limit - 1)
          : setLimit(7)
        : limit === slides.length
        ? setLimit(1)
        : setLimit(limit + 1);
      setDistance(distanceRef);
      setDot(doRef);
      setContent(contenRef);
      if (direction === '') {
        listRC.style.transition = 'all 0.3s ease';
        setLimit(i === lim ? lim : i);
        if (conten === -332 && i !== lim) {
          listRC.style.transform = `translateX(${-830 * (i - 1)}px)`;
          dotRC.style.transform = `translateX(${166 * (i - 2 - 1)}px)`;
          setDistance(-830 * (i - 1));
          setDot(166 * (i - 2 - 1));
          setContent(conten);
        } else if (conten === -166 && i !== lim) {
          listRC.style.transform = `translateX(${-830 * (i - 1)}px)`;
          dotRC.style.transform = `translateX(${166 * (i - 1 - 1)}px)`;
          setDistance(-830 * (i - 1));
          setDot(166 * (i - 1 - 1));
          setContent(conten);
        } else if (i !== lim) {
          listRC.style.transform = `translateX(${-830 * (i - 1)}px)`;
          dotRC.style.transform = `translateX(${166 * (i - 1)}px)`;
          setDistance(-830 * (i - 1));
          setDot(166 * (i - 1));
          setContent(conten);
        }
      } else {
        if (direction === 'Left') {
          listRC.style.transition = 'all 0.3s ease';
          if (lim === 1 && dot === 0) {
            listRC.style.transition = 'transition 0.1s ease-out';
            listRC.style.transform = `translateX(${-830 * 6 + distance}px)`;
            dotRC.style.transform = `translateX(${166 * 4 + dot}px)`;
            conRC.style.transform = `translateX(${conten - 166 * 2}px)`;
            setDistance(-4980);
            setDot(664);
            setContent(conten - 166 * 2);
          } else if (lim <= 3 && lim !== 1 && dot === 0) {
            listRC.style.transform = `translateX(${830 + distance}px)`;
            dotRC.style.transform = `translateX(${dot}px)`;
            conRC.style.transform = `translateX(${conten + 166}px)`;
            setDistance(830 + distance);
            setDot(dot);
            setContent(conten + 166);
          } else if (conten === -166 && lim === slides.length - 1) {
            listRC.style.transform = `translateX(${830 + distance}px)`;
            dotRC.style.transform = `translateX(${-166 + dot}px)`;
            conRC.style.transform = `translateX(${conten - 166}px)`;
            setDistance(830 + distance);
            setDot(-166 + dot);
            setContent(conten - 166);
          } else {
            listRC.style.transform = `translateX(${830 + distance}px)`;
            dotRC.style.transform = `translateX(${-166 + dot}px)`;
            setDistance(830 + distance);
            setDot(-166 + dot);
            setContent(conten);
          }
        } else if (direction === 'Right') {
          listRC.style.transition = 'transform 0.3s ease';
          if (lim % 5 === 0 && dot === 664) {
            listRC.style.transform = `translateX(${-830 + distance}px)`;
            dotRC.style.transform = `translateX(${-166 + dot}px)`;
            conRC.style.transform = `translateX(${-166 * 2 + conten}px)`;
            setDistance(-830 + distance);
            setDot(dot - 166);
            setContent(-166 * 2 + conten);
          } else if (dot === -498 && lim === slides.length - 1) {
            listRC.style.transform = `translateX(${-830 + distance}px)`;
            dotRC.style.transform = `translateX(${dot}px)`;
            conRC.style.transform = `translateX(${conten - 166}px)`;
            setDistance(-830 + distance);
            setDot(dot);
            setContent(conten - 166);
          } else if (lim === slides.length && dot === 664) {
            listRC.style.transition = 'transition 0.1s ease-out';
            listRC.style.transform = `translateX(${830 * 6 + distance}px)`;
            dotRC.style.transform = `translateX(${-166 * 4 + dot}px)`;
            conRC.style.transform = `translateX(${166 * 2 + conten}px)`;
            setDistance(0);
            setDot(0);
            setContent(0);
          } else {
            listRC.style.transform = `translateX(${-830 + distance}px)`;
            dotRC.style.transform = `translateX(${166 + dot}px)`;
            setDistance(-830 + distance);
            setDot(166 + dot);
            setContent(conten);
          }
        }
      }
    }
    // console.log(distance);
  };
  // console.log(test());
  return (
    <C>
      <Container ref={containerRef}>
        <div ref={listRef}>
          {slidesImg.map((slide: any) => {
            return <img key={slide.id} src={slide.img} alt="" />;
          })}
        </div>
        
        ;
      </Container>
      <Icon className="ho">
        <ArrowBackIosIcon
          className="Left"
          onClick={() =>
            handleClick(
              'Left',
              limit,
              1,
              listRef.current!,
              dotRef.current!,
              contentRef.current!
            )
          }
        />
        <ArrowForwardIosIcon
          className="Right"
          onClick={() =>
            handleClick(
              'Right',
              limit,
              1,
              listRef.current!,
              dotRef.current!,
              contentRef.current!
            )
          }
        />
      </Icon>
      <H ref={dotRef} />
      <Content>
        <div ref={contentRef}>
          {slides.map((slide) => {
            return (
              <span
                key={slide.id}
                className={slide.id === limit ? 'active' : ''}
                onClick={() => {
                  // eslint-disable-next-line no-lone-blocks
                  {
                    handleClick(
                      '',
                      limit,
                      slide.id,
                      listRef.current!,
                      dotRef.current!,
                      contentRef.current!
                    );
                  }
                }}
              >
                {slide.name}
                <br />
                {slide.ma}
              </span>
            );
          })}
        </div>
      </Content>
    </C>
  );
};
const C = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .ho {
    display: none;
  }
  .Left {
    ${Block('34px', '60px', '#FAFAFA')}
    ${Arrows('120px')}
    text-align: center;
    border-radius: 0 4px 4px 0;
  }
  .Right {
    ${Block('34px', '60px', '#FAFAFA')}
    right: 0;
    ${Arrows('120px')}
    border-radius: 4px 0 0 4px;
  }
  &:hover .ho {
    display: block;
  }
`;
const Icon = styled.div``;
const Container = styled.div`
  position: relative;
  overflow: hidden;
  ${Block('100%', '300px', '')}
  div {
    position: absolute;
    display: flex;
    width: max-content;
    transform: translateX(0px);
    transition: transform 0.4s ease;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    img {
      object-fit: cover;
    }
  }
`;
const H = styled.div`
  position: absolute;
  ${Block('166px', '4px', '#cd1817')}
  object-fit: cover;
  z-index: 99;
  display: block;
  transform: translateX(0px);
  transition: all 0.2s ease;
  border-radius: 3px;
`;
const Content = styled.div`
  -moz-user-select: none !important;
  -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
  width: 100%;
  height: 50px;
  align-items: center;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease;
  &::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    z-index: 1000;
    ${Block('1px', '46px', 'white')}
  }
  div {
    position: absolute;
    display: flex;
    width: max-content;
    transform: translateX(0px);
    transition: all 0.4s ease;
    span {
      ${Block('166px', '', 'white')}
      object-fit: cover;
      text-align: center;
      font-size: 13px;
      padding: 10px 0;
      position: relative;
      cursor: pointer;
      &:not(:first-child) {
        &::before {
          position: absolute;
          content: '';
          left: 0;
          bottom: 0;
          z-index: 1000;
          margin-bottom: 10px;
          opacity: 0.5;
          ${Block('1px', '30px', 'red')}
        }
      }
    }
    .active {
      font-weight: 700;
      opacity: 0.9;
    }
  }
`;
