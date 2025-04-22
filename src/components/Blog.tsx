import React from "react";
import "./Blog.css"; // Importez le fichier CSS spécifique à Blog

interface Props {}

// Ici, vous pouvez définir un tableau d'objets représentant vos articles de blog
const posts = [
  {
    title: "Mon Premier Article de Blog",
    date: "2025-04-22",
    excerpt: "Un court résumé de mon premier article de blog passionnant.",
    link: "#", // Lien vers l'article de blog complet
  },
  {
    title: "Conseils pour Développer en React",
    date: "2025-04-15",
    excerpt:
      "Quelques astuces et conseils utiles pour améliorer votre développement React.",
    link: "#",
  },
  // Ajoutez d'autres articles de blog ici
];

const Blog: React.FC<Props> = () => {
  return (
    <section className="blog">
      <div className="container">
        <h2>Mon Blog</h2>
        <div className="posts-list">
          {posts.map((post, index) => (
            <div className="post-item" key={index}>
              <h3>{post.title}</h3>
              <p className="date">Publié le: {post.date}</p>
              <p className="excerpt">{post.excerpt}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Lire la suite
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
