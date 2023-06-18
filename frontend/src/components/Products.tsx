/* eslint-disable no-useless-concat */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ProductItem } from 'components/ProductItem';
import { RootStateOrAny, useSelector } from 'react-redux';
import { publicRequest } from 'requestMethods';
import { Flex } from 'responsive';

export const ProductsList = ({ cat, sort, fill, count, page, setCount, setCountPro }: any) => {
  const products = useSelector((state: RootStateOrAny) => state.product.products);
  // console.log(products, cat);
  const [filteredProducts, setFilteredProducts] = React.useState<Array<any>>(products);
  useEffect(() => {
    let fi = '';
    const arrFill = ['tn', 'hn', 'hang', 'loai', 'color', 'ram', 'gia'];
    const arrFillText = ['tinhnang', 'hieunang', 'hang', 'categories', 'color', 'ram', 'price'];
    let i;
    for (i = 0; i < arrFill?.length; i++) {
      if (fill[arrFill[i] ? arrFill[i] : '']?.length !== 0) {
        fi = fi + `&${arrFillText[i]}=` + `${fill[arrFill[i] ? arrFill[i] : '']?.toString()}`;
      }
    }
    if (count) {
      fi = fi + '&counts=' + `${count}`;
    }
    if (page) {
      fi = fi + '&page=' + `${page}`;
    }
    // console.log(fi, hang, tn, hn);
    const getProduct = async () => {
      try {
        if (
          fill.gia !== undefined ||
          fill.tn !== undefined ||
          fill.hn !== undefined ||
          fill.hang !== undefined ||
          fill.color !== undefined ||
          fill.ram !== undefined ||
          fill.loai !== undefined
        ) {
          if (count) {
            const res = await publicRequest.get(`products/find/categories/products?${fi}`);
            setCountPro(res.data);
          } else {
            const res = await publicRequest.get(`products/find/categories/products?${fi}`);
            setCount(true);
            setFilteredProducts(res.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [count, fill, page, setCount, setCountPro]);

  useEffect(() => {
    if (sort === 'Newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.count - b.count));
    } else if (sort === 'desc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.count - a.count));
    }
  }, [sort]);
  return (
    <C>
      <Wrapper>
        {cat
          ? filteredProducts.map((product) => <ProductItem key={product._id} product={product} />)
          : products
              .slice(0, 8)
              .map((product: any) => (
                <ProductItem className="hao" key={product._id} product={product} />
              ))}
      </Wrapper>
    </C>
  );
};
const C = styled.div`
  /* padding: 0 158px; */
  ${Flex('center', 'center')}
  min-width: 820px;
  margin-top: 10px;
`;
const Wrapper = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
`;
