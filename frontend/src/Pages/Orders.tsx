import Footer from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { NavbarMain } from 'components/NavbarMain';
import OrderItem from 'components/OrderItem';
import React from 'react';

const Orders = () => {
  return (
    <>
      <Navbar />
      <NavbarMain />
      <OrderItem />
      <Footer />
    </>
  );
};

export default Orders;
