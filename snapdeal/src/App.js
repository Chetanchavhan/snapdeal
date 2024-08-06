import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import Detail from './Detail';
import Search from './Search';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

export default class App extends Component {
  render() {
    return (
      <Router>
    
          <Route path='/' exact element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
       
      </Router>
    );
  }
}

