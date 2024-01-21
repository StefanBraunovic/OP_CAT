// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home  from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import OP from './pages/OP/OP';
import EatingCat from './pages/EatingCat/EatingCat';
import WalkingCat from './pages/WalkingCat/WalkingCat';
import OPCAT from './pages/OPCAT/OPCAT';
import Vote from './pages/Vote/Vote';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/OP" element={<OP />} />
      <Route path="/OP_CAT" element={<OPCAT />} />
      <Route path="/CAT" element={<WalkingCat />} />
      <Route path="/FEED_CAT" element={<EatingCat />} />
      <Route path="/" element={<Home />} />
      <Route path="/Vote" element={<Vote />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
