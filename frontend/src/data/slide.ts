import sl from '../img/slide.png';
import sl2 from '../img/slide2.png';
import sl3 from '../img/slide3.png';
interface props {
  id: number;
  name: string;
  ma: string;
}
interface propsImg {
  id: number;
  img: any;
}
export let slidesImg: Array<propsImg> = [
  {
    id: 1,
    img: `${sl}`,
  },
  {
    id: 2,
    img: `${sl2}`,
  },
  {
    id: 3,
    img: `${sl3}`,
  },
  {
    id: 4,
    img: `${sl2}`,
  },
  {
    id: 5,
    img: `${sl}`,
  },
  {
    id: 6,
    img: `${sl2}`,
  },
  {
    id: 7,
    img: `${sl3}`,
  },
];

export const slides: Array<props> = [
  {
    id: 1,
    name: 'Sản phẩm 13 Pro',
    ma: 'Giam Online 4 triệu',
  },
  {
    id: 2,
    name: 'Chuyển trang samsum',
    ma: 'Giam ngay 8 triệu',
  },
  {
    id: 3,
    name: 'Xiaomi 11T series',
    ma: 'Giam ngay 800 ngan',
  },
  {
    id: 4,
    name: 'Đồng hồ thời trang nam',
    ma: 'Giam ngay 50%++',
  },
  {
    id: 5,
    name: 'Laptop Gamming',
    ma: 'Giam ngay 5000.000đ',
  },
  {
    id: 6,
    name: 'redmi Watch  2 Lite',
    ma: 'Giam ngay 900 ngan',
  },
  {
    id: 7,
    name: 'Sam phụ kiện',
    ma: 'Giam ngay 10000 ngan',
  },
];
