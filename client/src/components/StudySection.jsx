import React from 'react';

const StudySection = ({ imgurl, title, desc }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' ,width:"700px",margin:'10px'}}>
      <img src={imgurl} alt="Placeholder" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default StudySection;
