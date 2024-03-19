import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MaterialList.css'

const MaterialList = () => {
  const { subjectId } = useParams();
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/studymaterial/subjects/${subjectId}/materials`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch materials');
        }
        return response.json();
      })
      .then(data => {
        setMaterials(data);
      })
      .catch(error => {
        console.error('Error fetching materials:', error);
      });
  }, [subjectId]);

  return (
    <div className="material-list-container">
      <h2>Materials for Subject ID: {subjectId}</h2>
      <div className="material-list">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>PDF URL</th>
            </tr>
          </thead>
          <tbody>
            {materials.map(material => (
              <tr key={material._id}>
                <td>{material.title}</td>
                <td>
                  <a href={material.pdfUrl} target="_blank" rel="noopener noreferrer">
                    {material.pdfUrl}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaterialList;
