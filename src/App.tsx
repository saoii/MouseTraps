import React from 'react';
import './App.css';
import ParksPage from './pages/rides/ParksPage';
import { WdwQuote } from './pages/quote/wdwquote';
import { Header } from './Header';
import { Footer } from './Footer';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { About } from './pages/about/about';

function AppRouter() {
  return (
    <div id="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/quote" element={<WdwQuote />} />
          <Route path="/rides" element={<ParksPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
