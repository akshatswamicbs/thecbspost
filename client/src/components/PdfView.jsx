import React, { useState } from 'react'
import { Document, Page,pdfjs} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


export default function PdfView(props) {
    const [numPages,setNumPages]=useState(null);
    const [pageNumber,setPageNumber]=useState(1);

    const onDocumentLoadSuccess=({numPages})=>{
        setNumPages(numPages);
    }
    const nextPage=()=>{
        if(pageNumber<numPages){
            setPageNumber(pageNumber+1);
        }
    }
    const prevPage=()=>{
        if(pageNumber>numPages){
            setPageNumber(pageNumber-1);
        }
    }

  return (
    <> 
     <div className='wrap'>
        <div className='controls'>
            <button onClick={prevPage} disabled={pageNumber===1}>Previous</button>
            <button onClick={nextPage} disabled={pageNumber===numPages}>Next</button>
        </div> 
        <Document file={props.pdf} onLoadSuccess={onDocumentLoadSuccess} onContextMenu={(e)=>e.preventDefault()} className="pdf-container" >
             <Page pageNumber={pageNumber} />
        </Document>

     </div>
      
    </>
  )
}
