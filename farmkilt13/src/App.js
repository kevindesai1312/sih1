
import './App.css';
import Navbar from './componetes/navbar/navbar';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shopcategory from './pages/shopcategory';
import Product from './pages/product';
import Cart from './pages/cart';
import Shop from './pages/shop';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/vegetable' element={<shopcategory category="vegetables"/>}/>
          <Route path='/fruties' element={<shopcategory category="fruties"/>}/>
          <Route path='/meat-fish' element={<shopcategory category="meat-fish"/>}/>
          <Route path='/product' element={<product/>}/>
          <Route path=':productId' element={<product/>}/>
          <Route path='/cart' element={<cart/>}/>
          <Route path='/login' element={<loginsignup/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
