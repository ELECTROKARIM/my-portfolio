import React, { useState, useCallback } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const sectionStyles = {
  padding: '20px',
  backgroundColor: '#2e4053',
  color: '#fff',
  border: '2px solid #fff',
  borderRadius: '8px'
};

const listStyles = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center'
};

const itemStyles = (color) => ({
  backgroundColor: '#5f6a6a',
  border: '1px solid #444',
  borderRadius: '8px',
  padding: '10px',
  fontSize: '16px',
  width: '300px',
  color: '#fff',
  cursor: 'pointer'
});

const barContainerStyles = {
  width: '100%',
  backgroundColor: '#444',
  borderRadius: '8px',
  overflow: 'hidden',
  marginTop: '10px'
};

const barStyles = (progress, color) => ({
  height: '20px',
  width: `${progress}%`,
  backgroundColor: color,
  transition: 'width 0.5s'
});

const languageContainerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '20px',
  marginTop: '20px',
  justifyContent: 'center'
};

const circleContainerStyles = {
  position: 'relative',
  width: '120px',
  height: '120px'
};

const circleSVGStyles = {
  width: '100%',
  height: '100%'
};

const circleTextStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  fontSize: '16px',
  color: '#fff',
  pointerEvents: 'none'
};

const circleStyles = (color, percentage) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return {
    stroke: color,
    strokeWidth: '10',
    strokeDasharray: circumference,
    strokeDashoffset: offset,
    fill: 'none',
    transition: 'stroke-dashoffset 0.5s',
    transform: 'rotate(-90deg)',
    transformOrigin: 'center'
  };
};

const Skills = () => {
  const [progresses, setProgresses] = useState({
    'JavaScript': 0,
    'React': 0,
    'CSS': 0,
    'HTML': 0
  });

  const [languageProgresses, setLanguageProgresses] = useState({
    'Français': 0,
    'Anglais': 0,
    'Espagnol': 0,
    'Allemand': 0,
    'Italien': 0,
    'Portugais': 0,
    'Chinois': 0
  });

  const skills = [
    { name: 'JavaScript', level: 90, color: '#f7df1e' },
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'CSS', level: 95, color: '#264de4' },
    { name: 'HTML', level: 95, color: '#e34f26' }
  ];

  const languages = [
    { name: 'Français', level: 95, color: '#3498db' },
    { name: 'Anglais', level: 85, color: '#e74c3c' },
    { name: 'Espagnol', level: 75, color: '#2ecc71' },
    { name: 'Allemand', level: 60, color: '#f39c12' },
    { name: 'Italien', level: 75, color: '#8e44ad' },
    { name: 'Portugais', level: 50, color: '#e67e22' },
    { name: 'Chinois', level: 50, color: '#1abc9c' }
  ];

  const animateProgress = useCallback((name, level, setFunction) => {
    let start = 0;
    const end = level;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepIncrement = (end - start) / totalSteps;

    const interval = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setFunction(prev => ({ ...prev, [name]: Math.round(start) }));
    }, stepTime);
  }, []);

  const handleMouseEnter = (item, setFunction) => {
    setFunction(prev => ({ ...prev, [item.name]: 0 }));
    animateProgress(item.name, item.level, setFunction);
  };

  const handleChange = (isVisible) => {
    if (isVisible) {
      skills.forEach(skill => animateProgress(skill.name, skill.level, setProgresses));
    }
  };

  return (
    <section id="skills" style={sectionStyles}>
      <VisibilitySensor onChange={handleChange} partialVisibility>
        <div>
          <h2>Compétences</h2>
          <ul style={listStyles}>
            {skills.map((skill, index) => (
              <li
                key={index}
                style={itemStyles(skill.color)}
                onMouseEnter={() => handleMouseEnter(skill, setProgresses)}
              >
                <div>{skill.name}</div>
                <div style={barContainerStyles}>
                  <div style={barStyles(progresses[skill.name] || 0, skill.color)}></div>
                </div>
              </li>
            ))}
          </ul>
          <div style={languageContainerStyles}>
            {languages.map((language, index) => (
              <div
                key={index}
                style={circleContainerStyles}
                onMouseEnter={() => handleMouseEnter(language, setLanguageProgresses)}
              >
                <svg
                  style={circleSVGStyles}
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#ddd"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    style={circleStyles(language.color, languageProgresses[language.name] || 0)}
                  />
                </svg>
                <div style={circleTextStyles}>
                  <div>{language.name}</div>
                  <div>{languageProgresses[language.name]}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </VisibilitySensor>
    </section>
  );
};

export default Skills;
