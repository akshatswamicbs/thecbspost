import React from 'react';

const JobSeekerForm = () => {
  return (
    <div className="bg-white-200 h-1/2 flex justify-center items-center" style={{margin:'10px 0 100px 0'}}>
      <div className="w-1/2 bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Job Seeker Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">College</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Degree</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Year of Graduation</label>
            <input type="text" className="border rounded w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Upload Resume (PDF only)</label>
            <input type="file" accept=".pdf" className="border rounded w-full px-3 py-2" />
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
