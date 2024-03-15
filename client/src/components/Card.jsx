// import React from 'react'

// export default function Card(props) {
//   return (
//     <div style={{border:'2px solid black',height:'200px',width:'310px', margin:'20px'}}>
//         <iframe width="310" height="200" src={props.source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//     </div>
//   )
// }
// Card.jsx

import React, { useState } from 'react';

export default function Card({ source }) {
  const [enlarged, setEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setEnlarged(!enlarged);
  };

  return (
    <div style={{ width: '300px', height: enlarged ? '400px' : '200px', overflow: 'hidden', cursor: 'pointer' }} onClick={toggleEnlarged}>
      <iframe
        src={source}
        title="YouTube Video"
        allowFullScreen
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
}

