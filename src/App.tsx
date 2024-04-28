import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page from './pages/Page';
import { DarkModeProvider } from './components/Dark/DarkModeContext';
import DarkMode from './components/Dark/DarkMode';
import './App.css';

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <DarkMode />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;