import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import APropos from "./components/APropos";
import Services from "./components/Services";
import Realisations from "./components/Realisations";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import MentionsLegales from "./components/MentionsLegales";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
