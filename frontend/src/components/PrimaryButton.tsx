import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Block, Flex } from 'responsive';
function PrimaryButton({
  to,
  href,
  title,
  primary = false,
  bot = false,
  nav = false,
  dh = false,
  active = false,
  disabled = false,
  item,
  filters = false,
  fb = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}: any) {
  let Comp: any = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  let classes: any = '';
  if (primary) {
    classes = 'primary';
  } else if (bot) {
    classes = 'bot';
  } else if (nav) {
    classes = 'nav';
  } else if (filters) {
    classes = 'filters';
  } else if (fb) {
    classes = 'fb';
  } else if (dh) {
    classes = 'dh';
    if (active) {
      classes = 'dh active';
    }
  }
  // console.log(primary, bot, item);
  return (
    <Nav>
      <Comp className={classes} {...props}>
        {leftIcon && <span className="icon">{leftIcon}</span>}
        <span className="title">{title}</span>
        {rightIcon && <span className="icon">{rightIcon}</span>}
      </Comp>
    </Nav>
  );
}
const Nav = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 0 3px;
  border-radius: 4px;
  font-weight: 700;
  user-select: none;
  + .wrapper {
    margin-left: 8px;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .icon + .title,
  .title + .icon {
    margin-left: 6px;
  }

  .icon {
    display: inline-block;
    width: 24px;
    text-align: center;
  }

  // Button types
  .bot {
    background-color: #2f80ed;
    width: 100px;
    height: 50px;
    cursor: pointer;
    color: white;
    border: none;
    &:hover {
      font-weight: 800;
    }
  }

  .primary {
    color: white;
    /* background-color: #ff6801; */
    background-color: teal;
    border: none;
    width: 150px;
    height: 50px;
    cursor: pointer;
    position: relative;
    &:hover {
      &:after {
        content: '';
        width: 100%;
        height: 1.2rem;
        background: transparent
          linear-gradient(180deg, rgba(0, 0, 0, 0.479) 0%, rgba(77, 83, 83, 0.045) 100%) 0% 0%
          no-repeat padding-box;
        box-shadow: 0 4px 6px #00000014;
        top: 0;
        left: 0;
        position: absolute;
      }
    }
    &:after {
      content: '';
      width: 100%;
      height: 1.2rem;
      background: transparent
        linear-gradient(180deg, rgba(77, 83, 83, 0.045) 0%, rgba(0, 0, 0, 0.479) 100%) 0% 0%
        no-repeat padding-box;
      box-shadow: 0 4px 6px #00000014;
      bottom: 0;
      left: 0;
      position: absolute;
    }
  }

  .nav {
    ${Flex('center', '')}
    color: #2979ff;
    border: 0.2px solid #2979ff;
    padding: 2px 10px;
    opacity: 0.8;
    width: 120px;
    font-size: 13px;
    height: 32px;
    border-radius: 5px;
    background-color: black;
    &:hover {
      background-color: white;
    }
    p {
      width: 20px;
      background-color: red;
      text-align: center;
      line-height: 22px;
      color: white;
      border-radius: 50%;
      height: 20px;
    }
  }
  .dh {
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    margin: 20px 4px;
    color: white;
    border-radius: 8px;
    background-color: black;
    cursor: pointer;
    ${Block('164px', '40px', '')}
    &:first-child {
      margin-left: 0px;
    }
    &:not(:first-child) {
      margin-left: -10px;
    }
  }
  div.active {
    background-color: white;
  }
  .filters {
    display: block;
    background: #b8d1ea;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
    margin: 3px 10px;
    padding: 0 24px 0 15px;
    cursor: pointer;
    position: relative;
    border-radius: 3px;
    border: 2px solid transparent;
    .icon {
      font-size: 13px;
    }
    .show {
      display: none;
    }
    .fill {
      color: white;
      width: 15px;
      height: 15px;
      top: 13px;
      right: 19px;
      border-radius: 50%;
      line-height: 19px;
      position: absolute;
      opacity: 0.8;
      background-color: red;
    }
    &:hover {
      border-color: #2979ff;
    }
    span {
      margin-left: 3px;
    }
    select {
      border: none;
      outline: none;
      scroll-behavior: smooth;
    }
  }
  .fb {
    ${Flex('center', 'center')}
    color: white;
    border: 1px solid teal;
    line-height: 27px;
    width: 100px;
    font-size: 13px;
    height: 27px;
    border-radius: 4px;
    background-color: teal;

    .icon {
      font-size: 13px;
      margin-top: 7px;
    }
  }
`;
export default PrimaryButton;
