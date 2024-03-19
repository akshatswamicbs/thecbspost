// StudyMaterial.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StudyMaterial.css';

export default function StudyMaterial() {
  const [sections, setSections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/studymaterial/sections')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setSections(data))
      .catch(error => console.error('Error fetching sections:', error));
  }, []);
  const handleButtonClick = (sectionId) => {
    navigate(`/subjects/${sectionId}`);
  };

  return (
    <div className="study-material-container">
      <div className="study-material-header">
        <h1>SSCBS Study Material</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {sections.map(section => (
          <div key={section._id} className="section-card">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <button onClick={() => handleButtonClick(section._id)}>{section.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
