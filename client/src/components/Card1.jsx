import React from 'react';
import { Link } from 'react-router-dom'


export default function Card1(props) {
  return (
    <div className='card' style={{ border: '2px solid black', width: '400px', height: '300px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src="https://via.placeholder.com/150" alt="image" className='card-img' style={{ textAlign: 'center' }} />
      <h2 className='card-title'>{props.title}</h2>
      <p className='card-desc'>{props.desc}</p>
      <Link to={props.directto}>
      <button style={{ border: 'none', borderRadius: '5px', padding: '10px 20px', backgroundColor: 'gray', color: 'white', fontSize: '16px', cursor: 'pointer', marginTop: '10px', transition: 'background-color 0.3s' }} 
      onMouseOver={(e) => e.target.style.backgroundColor = '#2E2C2C'} 
      onMouseOut={(e) => e.target.style.backgroundColor = 'gray'}>
        {props.bton}
      </button>
      </Link>
    </div>
  );
}

Card1.defaultProps = {
  title: "Bachelor of Management Studies",
  desc: "SSCBS, DU",
  inperson: false
}
