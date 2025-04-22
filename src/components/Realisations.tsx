import React from "react";
import "./Realisations.css"; // Importez le fichier CSS spécifique à Realisations

interface Props {}

// Ici, vous pouvez définir un tableau d'objets représentant vos réalisations/projets
const projects = [
  {
    title: "Projet E-commerce",
    description:
      "Développement d'une plateforme de vente en ligne complète avec gestion des produits, panier d'achat et paiement.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    imageUrl: "/images/projet-ecommerce.jpg", // Chemin vers une image du projet
    link: "#", // Lien vers le projet en ligne ou le dépôt GitHub
  },
  {
    title: "Application de Gestion de Tâches",
    description:
      "Création d'une application web pour organiser et suivre les tâches personnelles et professionnelles.",
    technologies: ["React", "TypeScript", "Firebase"],
    imageUrl: "/images/projet-taches.jpg",
    link: "#",
  },
  // Ajoutez d'autres projets ici
];

const Realisations: React.FC<Props> = () => {
  return (
    <section className="realisations">
      <div className="container">
        <h2>Mes Réalisations</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <p className="technologies">
                Technologies: {project.technologies.join(", ")}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Voir le Projet
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisations;
