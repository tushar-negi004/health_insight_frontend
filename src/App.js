import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navigation';
import CustomCarousel from './components/home/carousel';
import Tool from './components/tool/tool';
import Working from './components/working/working';
import FeedBack from './components/exp_feat/exp_feat';


import './App.css';

function App() {
  return (
    <>


      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CustomCarousel />} />
          <Route path="/tool" element={<Tool />} />
          <Route path="/working" element={<Working />} />
          <Route path="/feedback" element={<FeedBack />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
