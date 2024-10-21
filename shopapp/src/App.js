import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import Details from './components/Details';
import Default from './components/Default';
import Questions from './components/Questions';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/details/:id' element={<Details />} />

        <Route path='/questions' element={<Questions />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
