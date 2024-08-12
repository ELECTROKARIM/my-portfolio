import React, { useState } from 'react';

const headerStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const navStyles = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center'
};

const linkStyles = (hover, active) => ({
  color: active ? '#ff0' : '#fff', // Couleur lumineuse pour le lien actif
  textDecoration: hover ? 'underline' : 'none',
  fontSize: '18px',
  margin: '0 15px',
  transition: 'color 0.3s ease' // Transition fluide pour le changement de couleur
});

const Header = ({ activeSection }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <header style={headerStyles}>
      <nav>
        <ul style={navStyles}>
          <li>
            <a 
              href="#about" 
              style={linkStyles(hovered === 'about', activeSection === 'about')} 
              onMouseOver={() => setHovered('about')} 
              onMouseOut={() => setHovered(null)}
            >
              À propos
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              style={linkStyles(hovered === 'projects', activeSection === 'projects')} 
              onMouseOver={() => setHovered('projects')} 
              onMouseOut={() => setHovered(null)}
            >
              Projets
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              style={linkStyles(hovered === 'skills', activeSection === 'skills')} 
              onMouseOver={() => setHovered('skills')} 
              onMouseOut={() => setHovered(null)}
            >
              Compétences
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              style={linkStyles(hovered === 'contact', activeSection === 'contact')} 
              onMouseOver={() => setHovered('contact')} 
              onMouseOut={() => setHovered(null)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
