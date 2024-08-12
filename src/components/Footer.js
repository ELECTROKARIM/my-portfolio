import React from 'react';

const footerStyles = {
  padding: '20px',
  backgroundColor: '#2e4053',
  color: '#fff',
  border: '2px solid #fff', // Bordure blanche autour du footer
  borderRadius: '8px', // Coins arrondis pour le footer
  textAlign: 'center'
};

const linkStyles = {
  color: '#007bff',
  textDecoration: 'none'
};

const linkHoverStyles = {
  textDecoration: 'underline'
};

const Footer = () => {
  return (
    <footer className="spacing-border">
      <p>&copy; 2024 Votre Nom. Tous droits réservés.</p>
      <a 
        href="https://www.linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkStyles} 
        onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyles.textDecoration} 
        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
      >
        LinkedIn
      </a>
      <br />
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkStyles} 
        onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyles.textDecoration} 
        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
      >
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
