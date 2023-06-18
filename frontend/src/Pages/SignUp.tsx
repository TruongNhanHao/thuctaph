import { useNavigate } from 'react-router-dom';
import { Flex, mobile } from 'responsive';
import styled from 'styled-components';
import bg from '../img/back.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { inputs } from 'data/dataForm';
import React from 'react';
import FormInput from 'components/FormInput';
import { publicRequest } from 'requestMethods';
import PrimaryButton from 'components/PrimaryButton';
interface Props {}

export const SignUp = (props: Props) => {
  const history = useNavigate();
  const [values, setValues] = React.useState<object>({
    username: '',
    email: '',
    // birthday: '',
    password: '',
    // confirmPassword: '',
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('submỉt');
    try {
      await publicRequest.post(`auth/register`, values);
    } catch (error) {
      console.log(error);
    }
    history('/login');
  };

  const onChange = (e: { target: { name: string | number; value: string } }) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Wrapper>
        {/* <Account>
          <AccountCircleIcon sx={{ fontSize: 100 }} />
        </Account> */}
        <Form>
          {inputs?.map((input, index) => (
            <FormInput
              key={index}
              {...input}
              value={values[input.name as keyof typeof values]}
              onChange={onChange}
            />
          ))}
          {/* <PrimaryButton  title={'SIGN IN'} primary /> */}
        </Form>
        <H3>
          <PrimaryButton onClick={handleSubmit} to="/login" title={'Sign Up'} bot />
        </H3>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3)), url(${bg}) center;
  background-size: cover;
  ${Flex('center', 'center')}
`;
const Wrapper = styled.div`
  border-radius: 4px;
  width: 19%;
  padding: 10px;
  background-color: white;
  opacity: 0.8;
  position: relative;
  /* ${mobile({ width: '75%' })}&::after {
    content: '';
    position: absolute;
    left: 143px;
    top: -50px;
    height: 83px;
    width: 83px;
    border-radius: 50%;
    background-color: #bdbdbd;
  } */
`;
const Account = styled.div`
  text-align: center;
  margin-top: -68px;
  position: relative;
  z-index: 999;
  opacity: 0.8;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0px 60px;
  border-radius: 10px;
`;
const H3 = styled.h3`
  text-decoration: underline;
  font-size: 14px;
  line-height: 50px;
  margin-top: 5px;
  text-align: center;
  cursor: pointer;
`;
