import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/' element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
