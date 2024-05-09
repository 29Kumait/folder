import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import { DarkModeProvider } from "./components/Dark/DarkModeContext";
import AuthProvider from "./components/Authentication/Authentication.tsx";
import DarkMode from "./components/Dark/DarkMode";
import "./App.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DarkModeProvider>
        <DarkMode />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page" element={<Page />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </AuthProvider>
  );
};

export default App;
