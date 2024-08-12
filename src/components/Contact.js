import React from 'react';

const sectionStyles = {
  padding: '20px',
  backgroundColor: '#2e4053',
  color: '#fff',
  border: '2px solid #fff', // Bordure blanche autour du conteneur
  borderRadius: '8px' // Coins arrondis pour le conteneur
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

const inputStyles = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #444',
  backgroundColor: '#5f6a6a',
  color: '#fff',
  fontSize: '16px'
};

const buttonStyles = {
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer'
};

const Contact = () => {
  return (
    <section id="contact" className="spacing-border">
      <h2>Contactez-moi</h2>
      <form style={formStyles}>
        <input
          type="text"
          placeholder="Votre nom"
          style={inputStyles}
        />
        <input
          type="email"
          placeholder="Votre email"
          style={inputStyles}
        />
        <textarea
          placeholder="Votre message"
          style={{ ...inputStyles, height: '100px' }}
        />
        <button type="submit" style={buttonStyles}>
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
