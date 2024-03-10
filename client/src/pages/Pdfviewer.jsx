import React from 'react'
import PdfView from '../components/PdfView'
import SolPdf from '../assets/book.pdf'

export default function Pdfviewer() {
  return (
    <div>
      <PdfView pdf={SolPdf} ></PdfView>
    </div>
  )
}
