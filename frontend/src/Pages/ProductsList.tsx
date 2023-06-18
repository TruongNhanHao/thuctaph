import { Navbar } from 'components/Navbar';
import { NavbarMain } from 'components/NavbarMain';
import React from 'react';
import styled from 'styled-components';
import { Filter } from 'components/Filter';
import Footer from 'components/Footer';

interface Props {}

export const ProductsList = (props: Props) => {
  return (
    <Wrapper>
      <Navbar />
      <NavbarMain />
      <Filter />
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div``;
