import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Film from "./Film/Film";
import Header from "./Header/Header";
import Favorites from "./Favorites";

export default function App() {
  return (
      <BrowserRouter>
          <Header />
          <main>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/films/:id" element={<Film />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="*" element={<Home />} />
              </Routes>
          </main>
      </BrowserRouter>

  );
}
