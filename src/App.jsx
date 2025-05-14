import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resize from './pages/Resize';
import Loading from './pages/Loading';
import LocationAnalysis from './pages/LocationAnalysis';
import Collage from './pages/Collage';
import Feedback from './pages/Feedback';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resize" element={<Resize />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/analysis" element={<LocationAnalysis />} />
          <Route path="/collage" element={<Collage />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;