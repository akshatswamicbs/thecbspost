import React from 'react'
import Card from '../components/Card.jsx'

export default function Videos() {
  return (
    <>
    <div style={{width:'100vw',height:'40vh',display:'flex',justifyContent:'space-around'}}>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div style={{width:'100vw',display:'flex',justifyContent:'space-around'}}>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </> 
  )
}
