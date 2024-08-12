import React from 'react';

const sectionStyles = {
  padding: '20px',
  backgroundColor: '#2e4053',
  color: '#fff',
  border: '2px solid #fff', // Bordure blanche autour du conteneur
  borderRadius: '8px' // Coins arrondis pour le conteneur
};

const gridStyles = {
  display: 'flex',
  flexDirection: 'row', // Alignement horizontal
  gap: '20px', // Espace entre les cartes
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap' // Permet aux cartes de passer à la ligne suivante si nécessaire
};

const cardStyles = {
  backgroundColor: '#444', // Fond des cartes
  padding: '15px',
  maxWidth: '300px',
  textAlign: 'center',
  borderRadius: '8px', // Coins arrondis pour les cartes
  border: '1px solid #fff' // Bordure blanche autour des cartes
};

const imageStyles = {
  maxWidth: '100%',
  borderRadius: '8px'
};

const linkStyles = {
  color: '#007bff',
  textDecoration: 'none'
};

const linkHoverStyles = {
  textDecoration: 'underline'
};

const Projects = () => {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Un site web conçu pour la diffusion en direct de matchs sportifs...',
      link: '#',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNd0G7OouPg2A2Yy6CrWmWIFdtwxQmijZa1sAZ--_aEflc7ccCRQ2c7IeGKpHv3hvV-_Q&usqp=CAU'
    },
    {
      title: 'Projet 2',
      description: 'Un site web interactif développé en JavaScript pour un journal en ligne...',
      link: '#',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLXfMnY5HSiZrVYTKOgHDH4yLnXNziBUzqw&s'
    },
    {
      title: 'Projet 3',
      description: 'Un site de e-commerce développé avec React...',
      link: '#',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhu2RdjKNU9SQNJTT4gq2FVPnEw6PjsUBpg&s'
    }
  ];

  return (
    <section id="projects" style={sectionStyles}>
      <h2>Mes Projets</h2>
      <div style={gridStyles}>
        {projects.map((project, index) => (
          <div key={index} style={cardStyles}>
            <img src={project.image} alt={project.title} style={imageStyles} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={linkStyles} 
              onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyles.textDecoration} 
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
