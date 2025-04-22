import React from "react";
import "./Footer.css"; // Importez le fichier CSS spécifique à Footer

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} John Doe. Tous droits réservés.</p>{" "}
        {/* Remplacez John Doe par votre nom */}
        {/* Vous pouvez ajouter ici des liens vers vos réseaux sociaux */}
        {/* <div className="social-links">
          <a href="https://linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
