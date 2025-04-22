import React from "react";
import { Link } from "react-router-dom"; // Importez le composant Link pour la navigation

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>John Doe</h1> {/* Remplacez par votre nom */}
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/a-propos">À Propos</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/realisations">Réalisations</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
