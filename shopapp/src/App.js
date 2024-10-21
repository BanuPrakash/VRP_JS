import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import Details from './components/Details';
import Default from './components/Default';
import Questions from './components/Questions';
import SearchParams from './components/SearchParams';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(10);
  return <div>
    <p>Hello world!!!</p>
    <span>{count}</span>
    <button type='button' onClick={() => setCount(count + 1)}>Increment</button>
  </div>
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <NavbarComponent />
//       <Routes>
//         <Route path='/products' element={<ProductList />} />
//         <Route path='/cart' element={<Cart />} />
//         <Route path='/new_product' element={<ProductForm />} />
//         <Route path='/details/:id' element={<Details />} />
//         <Route path='/paginate' element={<SearchParams />} />
//         <Route path='/questions' element={<Questions />} />
//         <Route path='/' element={<ProductList />} />
//         <Route path='*' element={<Default />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
