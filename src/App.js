import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Film from "./Film/Film";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/films/:id" element={<Film />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}
