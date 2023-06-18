import { Route, Routes } from 'react-router-dom';
import { Home } from 'Pages/Home';
import { Login } from 'Pages/Login';
import { SignUp } from 'Pages/SignUp';
import { ProductsList } from 'Pages/ProductsList';
import { Detail } from 'Pages/Detail';
import Accessory from 'Pages/Accessory';
import { Total } from 'Pages/Total';
import Orders from 'Pages/Orders';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phu-kien" element={<Accessory />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products/dienthoai" element={<ProductsList />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/carts" element={<Total />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
