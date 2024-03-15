import React from 'react';

const JobOfferForm = () => {
  return (
    <div className="bg-white-200 h-1/2 flex justify-center items-center" style={{margin:'10px 0 100px 0'}}>
      <div className="w-1/2 bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Job Offer Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Job Title</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Salary</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Experience Required</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Skills Required</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Job Description</label>
            <textarea className="border rounded w-full px-3 py-2" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobOfferForm;
