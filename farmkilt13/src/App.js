
import './App.css';
import Navbar from './componetes/navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shopcategory from './pages/shopcategory';
import Product from './pages/product';
import Cart from './pages/cart';
import Shop from './pages/shop';

import Footer from './Footer';
import vege_banner from './componetes/assist/banner_mens.png'
import fruit_banner from './componetes/assist/banner-2.png'
import meat_banner from './componetes/assist/banner.jpg'
import LoginSignup from './pages/loginsignup';
 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/vegetable' element={<Shopcategory banner={vege_banner} category="vegetable"/>}/>
          <Route path='/fruite' element={<Shopcategory banner={fruit_banner} category="fruite"/>}/>
          <Route path='/meat-fish' element={<Shopcategory banner={meat_banner} category="meat-fish"/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
