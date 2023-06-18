import { css } from "styled-components";
// import bg from "/img/mushu.jpg";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const Navbar = (props) => {
  return css`
    /* background-image: url({}); */
    background-repeat: no-repeat;
    background-size: 300px 200px;
    line-height: 30px;
    margin-top: -5px;
    ${props}
  `;
};

export const Flex = (items, content) => {
  return css`
    display: flex;
    align-items: ${items};
    justify-content: ${content};
  `;
};
export const Block = (w, h, color) => {
  return css`
    width: ${w};
    height: ${h};
    background: ${color};
  `;
};
export const Arrows = (t) => {
  return css`
    position: absolute;
    z-index: 100;
    opacity: 0.6;
    padding: 8px;
    top: ${t};
  `;
};
