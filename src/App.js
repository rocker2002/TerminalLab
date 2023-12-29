import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  console.log('Hello, React!')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/*" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;




