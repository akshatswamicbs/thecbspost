import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SubjectList.css';

const SubjectList = () => {
  const { sectionId } = useParams();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/studymaterial/sections/${sectionId}/subjects`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch subjects');
        }
        return response.json();
      })
      .then(data => {
        setSubjects(data); // Assuming `data` contains the array of subjects
      })
      .catch(error => {
        console.error('Error fetching subjects:', error);
      });
  }, [sectionId]);

  // Check if subjects is undefined, null, or empty before mapping over it
  if (!subjects || subjects.length === 0) {
    return <div>No subjects found.</div>;
  }

  return (
    <div className="subject-list-container">
      <h2>Subjects</h2>
      <div className="subject-list">
        {subjects.map(subject => (
          <div key={subject._id} className="subject-card">
            <h3>{subject.title}</h3>
            <p>{subject.description}</p>
            <Link to={`/materials/${subject._id}`}>
              <button>{subject.button}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
