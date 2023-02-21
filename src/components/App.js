import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import KeyFeature from './pages/KeyFeature';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';
import Testimonials from './pages/Testimonials';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/features" element={<KeyFeature/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/demo" element={<Demo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
