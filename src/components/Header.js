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
  color: active ? '#ff0' : '#fff',
  position: 'relative',
  fontSize: '18px',
  margin: '0 15px',
  padding: active ? '5px 10px' : '0',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  backgroundColor: active ? '#ADD8E6' : 'transparent', 
  borderRadius: '5px', 
  boxShadow: active ? '0 0 10px #fff' : 'none', 
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    width: active ? '100%' : '0',
    height: '2px',
    backgroundColor: active ? '#fff' : 'transparent',
    boxShadow: active ? '0 0 5px #fff' : 'none', 
    transition: 'width 0.3s ease, box-shadow 0.3s ease', 
  }
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
