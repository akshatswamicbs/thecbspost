import React from 'react'
import PdfView from '../components/PdfView'
import SolPdf from '../assets/solutions.pdf'

export default function About() {
  return (
    <div>
      <PdfView pdf={SolPdf}   ></PdfView>
    </div>
  )
}

