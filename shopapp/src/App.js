import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import ProductList from './components/ProductList';

import ProductForm from './components/ProductForm';

import Default from './components/Default';
import Questions from './components/Questions';
import SearchParams from './components/SearchParams';
// import { useState } from 'react';

// lazy load components, these 2 will not be a part of main bundle.js
const Cart = lazy(() => import('./components/Cart'));
const Details = lazy(() => import('./components/Details'));

// function App() {
//   let [count, setCount] = useState(10);
//   return <div>
//     <p>Hello world!!!</p>
//     <span>{count}</span>
//     <button type='button' onClick={() => setCount(count + 1)}>Increment</button>
//   </div>
// }
export default App;

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={
          <Suspense fallback={<h1>Loading Cart....</h1>}>
            <Cart />
          </Suspense>
        }
        />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/details/:id' element={
          <Suspense fallback={<h1>Loading Details....</h1>}>
            <Details />
          </Suspense>
        } />
        <Route path='/paginate' element={<SearchParams />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

// export default App;
