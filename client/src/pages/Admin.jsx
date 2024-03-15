// import React, { useState } from 'react';

// const Admin = ({ onSetNumDivs }) => {
//   const [numDivs, setNumDivs] = useState(0);

//   const handleInputChange = (event) => {
//     const value = parseInt(event.target.value);
//     setNumDivs(value);
//   };

//   const handleSetNumDivs = () => {
//     onSetNumDivs(numDivs);
//   };

//   return (
//     <div>
//       <h2>Admin Panel</h2>
//       <label htmlFor="numDivs">Number of Divs:</label>
//       <input type="number" id="numDivs" value={numDivs} onChange={handleInputChange} />
//       <button onClick={handleSetNumDivs}>Set Number of Divs</button>
//     </div>
//   );
// };

// export default Admin;

import React, { useState } from 'react';

const Admin = ({ onSetNumDivs }) => {
  const [numDivs, setNumDivs] = useState(0);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setNumDivs(value);
    // Automatically set the number of divs when input changes
    onSetNumDivs(value);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <label htmlFor="numDivs">Number of Divs:</label>
      <input type="number" id="numDivs" value={numDivs} onChange={handleInputChange} />
    </div>
  );
};

export default Admin;
