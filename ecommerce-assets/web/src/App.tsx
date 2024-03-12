import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from '../src/pages/Cart/Cart';
import Shopping from '../src/pages/Shopping/Shopping';

function App() {
  const [totalItems, setTotalItems] = useState(0);

  return (
    <Router>
      <div className="App">
        <Header totalQuantity={totalItems} />
        <div className='mainContent'>
          <Routes>
            <Route path="/" element={<Home setTotalItems={setTotalItems} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shopping" element={<Shopping />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;