import React from 'react';
import { mobile } from 'responsive';
import styled from 'styled-components';

const FormInput = (props: any) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: React.FocusEvent) => {
    setFocused(true);
  };
  return (
    <FormInputStyled>
      <Label>{label}</Label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </FormInputStyled>
  );
};
const FormInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-right: -33px;
  margin-left: -33px;
  ${mobile({ marginRight: '-50', marginLeft: '-50' })}
  input {
    padding: 10px;
    margin: 10px 0px;
    border-radius: 5px;
    border: 1px solid gray;
  }
  span {
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
  }
  input:invalid[focused='true'] {
    border: 1px solid red;
  }

  input:invalid[focused='true'] ~ span {
    display: block;
  }
`;
const Label = styled.label`
  font-size: 14px;
  color: gray;
`;

export default FormInput;
