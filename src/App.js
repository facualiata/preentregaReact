import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './components/itemdetailcontainer/itemdetailcontainer';
import Cart from './components/cart/cart.js';

import  {CartProvider} from './components/context/cartcontext';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path to='/cart' element={<Cart />}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
