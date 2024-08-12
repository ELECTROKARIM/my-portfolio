import React from 'react';

const aboutSectionStyles = {
  padding: '20px',
  backgroundColor: '#2e4053', 
  color: '#fff',
  border: '2px solid #fff', // Bordure blanche
  borderRadius: '8px' // Coins arrondis
};

const aboutContentStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
};

const imageContainerStyles = {
  flex: '1', // L'image prend la moitié de l'espace
  display: 'flex',
  justifyContent: 'center' // Centre l'image horizontalement
};

const textContainerStyles = {
  flex: '1', // Le texte prend l'autre moitié de l'espace
  maxWidth: '600px'
};

const imageStyles = {
  borderRadius: '50%',
  width: '100%',
  height: 'auto',
  maxWidth: '150px',
  objectFit: 'cover'
};

const textStyles = {
  margin: 0
};

const About = () => {
  return (
    <section id="about" style={aboutSectionStyles}>
      <h2>À propos de moi</h2>
      <div style={aboutContentStyles}>
        <div style={imageContainerStyles}>
          <img src="/images/votre-photo.png" alt="Electrokarim" style={imageStyles} />
        </div>
        <div style={textContainerStyles}>
          <p style={textStyles}>
            Bonjour ! Je suis Electrokarim, un développeur passionné par le codage. 
            J'ai de l'expérience dans HTML, CSS, JAVASCRIPT, REACT
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
