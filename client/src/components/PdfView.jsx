import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './pdfview.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfView(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1);
    const pdfContainerRef = useRef(null); // Ref to control container dimensions

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const nextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const prevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const zoomIn = () => {
        setScale(scale + 0.1);
    };

    const zoomOut = () => {
        if (scale > 0.1) {
            setScale(scale - 0.1);
        }
    };

    return (
        <div className="wrap">
            <div className="controls">
                <button onClick={prevPage} disabled={pageNumber === 1}>
                    Previous
                </button>
                <button onClick={nextPage} disabled={pageNumber === numPages}>
                    Next
                </button>
                <button onClick={zoomIn}>
                    Zoom In
                </button>
                <button onClick={zoomOut}>
                    Zoom Out
                </button>
            </div>
            <div className="pdf-container" ref={pdfContainerRef}>
                <Document
                    file={props.pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onContextMenu={(e) => e.preventDefault()}
                    renderMode="canvas" // Ensure canvas rendering for precise control
                >
                    <Page
                        pageNumber={pageNumber}
                        scale={scale} // Pass the scale state to the Page component
                        renderAnnotationLayer={false}
                        renderTextLayer={false} // Disable annotation layer rendering
                        style={{ width: '80vw', height: 'auto', marginBottom: '100px' }} // Set explicit dimensions
                        className='pdf-canvas'
                    />
                </Document>
            </div>
        </div>
    );
}



