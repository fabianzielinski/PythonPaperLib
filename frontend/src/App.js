import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Magazines from "./components/Magazines";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/magazines" element={<Magazines />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
