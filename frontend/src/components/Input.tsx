import React from 'react';
import styled from 'styled-components';

export const Input = ({ title, set }: any) => {
  return (
    <>
      <From>
        <input
          onChange={(e) => set(e.target.value)}
          type="text"
          id={title}
          className="form__input"
          autoComplete="off"
          placeholder=" "
        />
        <label htmlFor={title} className="form__label">
          {title}
        </label>
      </From>
    </>
  );
};
const From = styled.div`
  position: relative;
  width: 260px;
  height: 36px;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #e1e5ee;
    border-radius: 6px;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 10px;
    background: none;
    &:hover {
      border-color: teal;
    }
    &:focus {
      border-color: teal;
    }
  }
  label {
    position: absolute;
    left: 10px;
    top: 8px;
    padding: 0 6px;
    cursor: text;
    background-color: white;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  }
  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
    top: -0.5rem;
    font-size: 14px;
    left: 0.8rem;
    color: teal;
  }
`;
