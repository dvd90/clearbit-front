import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/home';
import Show from './Pages/show';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/companies/:id" element={<Show />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
