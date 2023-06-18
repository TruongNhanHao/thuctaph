import { Dongho } from 'components/Dongho';
import Footer from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { NavbarMain } from 'components/NavbarMain';
import { Notify } from 'components/Notify';
import { PrdPromo } from 'components/PrdPromo';
import { SlideShow } from 'components/SlideShow';
import { AddCartInit } from 'features/cart/ApiCart';
import { getProducts } from 'features/products/apiProduct';
import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
interface Props {}

export const Home = (props: Props) => {
  const User: any = useSelector((state: RootStateOrAny) => state.auth.currentUser);
  const Id = User ? User._id : '';
  const dispatch = useDispatch();
  useEffect(() => {
    const getCart = async () => {
      try {
        if (Id !== '') {
          AddCartInit(Id, dispatch);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, [Id, dispatch]);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  console.log(Id);
  return (
    <div>
      <Navbar />
      <NavbarMain />
      <SlideShow />
      <PrdPromo />
      <Dongho />
      <Notify />
      <Footer />
    </div>
  );
};
