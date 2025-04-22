import React from "react";
import "./Contact.css"; // Importez le fichier CSS spécifique à Contact

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contactez-Moi</h2>
        <p className="intro-text">
          N'hésitez pas à me contacter pour toute question, opportunité ou
          collaboration. Remplissez le formulaire ci-dessous et je vous
          répondrai dès que possible.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Envoyer le Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
