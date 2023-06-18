import Footer from 'components/Footer';
import { GruopCate } from 'components/GruoCate';
import { Navbar } from 'components/Navbar';
import { NavbarMain } from 'components/NavbarMain';
import Phukien from 'components/Phukien';
import { PrdPromo } from 'components/PrdPromo';
import React from 'react';

const Accessory = () => {
  return (
    <div>
      <Navbar />
      <NavbarMain />
      <GruopCate />
      <PrdPromo />
      <Phukien />
      <Phukien />
      <Phukien />
      <Phukien />
      <Footer />
    </div>
  );
};

export default Accessory;
