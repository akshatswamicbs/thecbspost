import React from 'react';
import CardPDF from '../components/Carfpdf.jsx';

export default function BMS() {
  // Sample data for card props
  const cardsData = [
    { id: 1, title: 'PDF 1', imageSrc: 'https://via.placeholder.com/150', pdfLink: '/' },
    { id: 2, title: 'PDF 2', imageSrc: 'https://via.placeholder.com/150', pdfLink: '/' },
    { id: 3, title: 'PDF 3', imageSrc: 'https://via.placeholder.com/150', pdfLink: '/' },
    { id: 4, title: 'PDF 4', imageSrc: 'https://via.placeholder.com/150', pdfLink: '/' },
    { id: 5, title: 'PDF 5', imageSrc: 'https://via.placeholder.com/150', pdfLink: '/' },
    { id: 6, title: 'PDF 6', imageSrc: 'https://via.placeholder.com/150', pdfLink: '/' }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {/* Render CardPDF components */}
      {cardsData.map(card => (
        <CardPDF key={card.id} title={card.title} imageSrc={card.imageSrc} pdfLink={card.pdfLink} />
      ))}
    </div>
  );
}
;