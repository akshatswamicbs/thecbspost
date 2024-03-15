import React from 'react'
import Card1 from '../components/Card1'

export default function StudyMaterial() {
  return (
    <div style={{height:'100vh'}}>
      <h1 style={{textAlign:'center',fontSize:'40px', marginTop:'10px'}}>SSCBS Study Material</h1>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Card1  bton="View for BMS" directto='/bmsmaterial' />
      <Card1 bton="View for BBA-FIA" directto="/bfiamaterial" />
      </div>
    </div>
  )
}






