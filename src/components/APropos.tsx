import React from "react";
import "./APropos.css"; // Importez le fichier CSS spécifique à APropos

interface Props {}

const APropos: React.FC<Props> = () => {
  return (
    <section className="a-propos">
      <div className="container">
        <h2>À Propos de Moi</h2>
        <p>
          Ici, vous pouvez écrire une description détaillée de votre parcours
          professionnel. Parlez de vos expériences passées, des rôles que vous
          avez occupés et des responsabilités que vous avez assumées.
        </p>
        <p>
          Mettez en avant vos compétences clés et les technologies avec
          lesquelles vous êtes le plus à l'aise. Expliquez ce qui vous passionne
          dans le développement web et quels sont vos objectifs de carrière.
        </p>
        {/* Vous pouvez ajouter des listes de compétences, des expériences spécifiques, etc. */}
      </div>
    </section>
  );
};

export default APropos;
