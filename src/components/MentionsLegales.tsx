import React from "react";
import "./MentionsLegales.css"; // Importez le fichier CSS spécifique à MentionsLegales

interface Props {}

const MentionsLegales: React.FC<Props> = () => {
  return (
    <section className="mentions-legales">
      <div className="container">
        <h2>Mentions Légales</h2>
        <p>
          Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
          dans l'économie numérique, nous vous informons que le présent site web
          est la propriété de [Votre Nom ou Nom de l'Entreprise].
        </p>
        <h3>Informations sur l'éditeur du site :</h3>
        <p>
          Nom : [Votre Nom ou Nom de l'Entreprise]
          <br />
          Adresse : [Votre Adresse]
          <br />
          Email : [Votre Adresse Email]
          <br />
          Téléphone : [Votre Numéro de Téléphone (facultatif)]
        </p>
        <h3>Hébergeur du site :</h3>
        <p>
          Nom : [Nom de l'Hébergeur]
          <br />
          Adresse : [Adresse de l'Hébergeur]
        </p>
        {/* Ajoutez d'autres informations légales pertinentes ici (par exemple, politique de confidentialité, conditions générales d'utilisation, etc.) */}
      </div>
    </section>
  );
};

export default MentionsLegales;
