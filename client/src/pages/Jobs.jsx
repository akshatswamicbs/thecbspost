// MainPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Welcome to Job Portal</h1>
        <div className="mb-4">
          <Link to="/job-seeker" className="bg-gray-800 text-white py-2 px-4 rounded mr-4">
            I am seeking a job
          </Link>
          <Link to="/job-offer" className="bg-gray-800 text-white py-2 px-4 rounded">
            I am hiring
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
