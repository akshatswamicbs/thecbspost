import React, { useState, useEffect } from 'react';
import './Admin.css';

export default function Admin() {
  const [formRequests, setFormRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFormRequests() {
      try {
        const response = await fetch("http://localhost:3000/api/jobseeker");
        if (response.ok) {
          const data = await response.json();
          setFormRequests(data);
        } else {
          throw new Error('Failed to fetch form requests.');
        }
      } catch (error) {
        console.error('Error fetching form requests:', error);
        setError('Error fetching form requests: ' + error.message);
      }
    }
    fetchFormRequests();
  }, []);

  return (
    <div className="admin-container p-8">
      <h2 className="text-2xl font-bold mb-4">All Form Submissions</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <div className="form-requests-container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {formRequests.map((request, index) => (
          <div key={index} className="form-request p-4 border rounded shadow-md">
            <h3 className="font-bold mb-2">Form Request #{index + 1}</h3>
            <p><strong>Name:</strong> {request.Name}</p>
            <p><strong>Email:</strong> {request.Email}</p>
            <p><strong>Contact:</strong> {request.Contact}</p>
            <p><strong>College:</strong> {request.College}</p>
            <p><strong>Degree:</strong> {request.Degree}</p>
            <p><strong>Year of Graduation:</strong> {request.YearOfGraduation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
