import React from "react";
import "./Accueil.css";
import "./APropos.css"; // Importez également le CSS de APropos
import { Link } from "react-router-dom";

interface Props {}

const Accueil: React.FC<Props> = () => {
  return (
    <div className="accueil-page">
      {" "}
      {/* Conteneur principal pour la page d'accueil */}
      <section className="accueil-hero">
        <div className="hero-image">
          {/* L'image de fond sera gérée en CSS */}
        </div>
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1> {/* Remplacez par votre nom */}
          <p className="lead">Développeur web full stack</p>{" "}
          {/* Remplacez par votre titre */}
          <Link to="/a-propos" className="button">
            En savoir plus
          </Link>{" "}
          {/* Lien "En savoir plus" */}
        </div>
      </section>
      <section className="a-propos">
        <div className="container">
          <h2>À propos</h2>
          <div className="a-propos-content">
            <div className="a-propos-text">
              <p>
                Passionné par l'informatique et les nouvelles technologies...{" "}
                {/* Remplacez par votre texte */}
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance...{" "}
                {/* Remplacez par votre texte */}
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code...{" "}
                {/* Remplacez par votre texte */}
              </p>
              {/* Ajoutez d'autres paragraphes si nécessaire */}
            </div>
            <div className="a-propos-image">
              <img
                src="/project/workspace/src/images/about.jpg"
                alt="Votre photo"
              />{" "}
              {/* Remplacez par le chemin de votre photo */}
            </div>
            <div className="a-propos-skills">
              <h3>Mes compétences</h3>
              <div className="skill-bar">
                <span>HTML</span>
                <div className="progress-bar" style={{ width: "90%" }}>
                  90%
                </div>
              </div>
              <div className="skill-bar">
                <span>CSS</span>
                <div className="progress-bar" style={{ width: "85%" }}>
                  85%
                </div>
              </div>
              <div className="skill-bar">
                <span>JAVASCRIPT</span>
                <div className="progress-bar" style={{ width: "70%" }}>
                  70%
                </div>
              </div>
              <div className="skill-bar">
                <span>PHP</span>
                <div className="progress-bar" style={{ width: "60%" }}>
                  60%
                </div>
              </div>
              <div className="skill-bar">
                <span>REACT</span>
                <div className="progress-bar" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
              {/* Ajoutez d'autres compétences ici */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
