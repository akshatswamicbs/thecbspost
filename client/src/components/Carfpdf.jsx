import React from 'react';
import { Link } from 'react-router-dom';

export default function CardPDF(props) {
  return (
    <div className='card-pdf' style={{ border: '2px solid black', width: '300px', height: '200px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={props.imageSrc} alt="PDF" className='card-pdf-img' style={{ textAlign: 'center', width: '80px', height: '80px' }} />
      <h3 className='card-pdf-title' style={{ fontSize: '14px', textAlign: 'center', margin: '10px 0' }}>{props.title}</h3>
      <Link to={props.pdfLink}>
        <button style={{ border: 'none', borderRadius: '5px', padding: '5px 10px', backgroundColor: '#007bff', color: 'white', fontSize: '14px', cursor: 'pointer' }}>View as PDF</button>
      </Link>
    </div>
  );
}

CardPDF.defaultProps = {
  imageSrc: 'https://via.placeholder.com/80', // Default placeholder image
  title: 'PDF Title',
  pdfLink: '/'
};
