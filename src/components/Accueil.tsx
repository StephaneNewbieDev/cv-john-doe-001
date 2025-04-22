import React from "react";
import "./Accueil.css"; // Importez le fichier CSS spécifique à Accueil

interface Props {}

const Accueil: React.FC<Props> = () => {
  return (
    <section className="accueil">
      <div className="container">
        <div className="accueil-content">
          <div className="photo">
            {/* Vous ajouterez votre photo ici (balise <img>) */}
            <img src="votre-photo.jpg" alt="Votre photo" />
          </div>
          <div className="intro">
            <h1>Bonjour, je suis John Doe</h1> {/* Remplacez par votre nom */}
            <p className="lead">
              Développeur Web passionné et créatif avec une expertise en React,
              Node.js et plus encore.
            </p>{" "}
            {/* Remplacez par votre propre description */}
            {/* Vous pouvez ajouter ici des liens vers vos réseaux sociaux ou un bouton d'appel à l'action */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
