import React, { useState } from 'react';

const JobSeekerForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Contact: '',
    College: '',
    Degree: '',
    YearOfGraduation: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false); // State for submission success

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/jobseeker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Seeker form submitted successfully');
        setSubmitSuccess(true); 
      } else {
        console.error('Failed to submit seeker form');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-white-200 h-1/2 flex justify-center items-center" style={{ margin: '10px 0 100px 0' }}>
      <div className="w-1/2 bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Job Seeker Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" className="border rounded w-full px-3 py-2" name="Name" onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              className="border rounded w-full px-3 py-2"
              name="Email" 
              onChange={handleChange} 
              value={formData.Email} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
            <input
              type="text"
              className="border rounded w-full px-3 py-2"
              name="Contact" 
              onChange={handleChange} 
              value={formData.Contact} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">College</label>
            <input
              type="text"
              className="border rounded w-full px-3 py-2"
              name="College" 
              onChange={handleChange} 
              value={formData.College}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Degree</label>
            <input
              type="text"
              className="border rounded w-full px-3 py-2"
              name="Degree" 
              onChange={handleChange} 
              value={formData.Degree} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Year of Graduation</label>
            <input
              type="text"
              className="border rounded w-full px-3 py-2"
              name="YearOfGraduation" 
              onChange={handleChange} 
              value={formData.YearOfGraduation} 
            />
          </div>
          <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobSeekerForm;
