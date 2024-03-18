// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import OP from "./pages/OP/OP";
import EatingCat from "./pages/EatingCat/EatingCat";
import Content from "./pages/Content/Content";
import Opcat from "./pages/OPCAT/OPCAT";
import Article from "./pages/Article/Article";
import SmartContractCat from "./pages/SmartContractCat/SmartContractCat";
import Vote from "./pages/Vote/Vote";
import WalkingCat from "./pages/WalkingCat/WalkingCat";
import StackGame from "./components/StackGame/StackGame";
import CodeExplained from "./pages/CodeExplained/CodeExplained";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/OP" element={<OP />} />
          <Route path="/CONTENT" element={<Content />} />
          <Route path="/OPCAT" element={<Opcat />} />
          <Route path="/FEED_CAT" element={<EatingCat />} />
          <Route path="/ARTICLE" element={<Article />} />
          <Route path="/OP_CAT_SMART" element={<SmartContractCat />} />
          <Route path="/OP_CAT_RELAX" element={<WalkingCat />} />
          <Route path="/Vote" element={<Vote />} />
          <Route path="/STACK_GAME" element={<StackGame />} />
          <Route path="/CODE_EXPLAINED" element={<CodeExplained />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
