import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import FicheLogement from "./pages/FicheLogement";

//import FicheLogement from ".pages/FicheLogement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A_propos" element={<About />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Error404 />} />
        <Route path="/Fiche_logement/:id" element={<FicheLogement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
