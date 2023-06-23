import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import FicheLogement from "./pages/Product";
import Footer from "./components/Footer";

// Composant sous forme de fonction permettant la création des routes.

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A_propos" element={<About />} />
          <Route path="/Fiche_logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;