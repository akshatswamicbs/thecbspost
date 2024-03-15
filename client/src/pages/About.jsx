import React from 'react';

const About = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>About Us</h1>
      <div style={{ maxWidth: '800px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus libero. Nullam ut elit ut nulla tincidunt lobortis.
          Sed dapibus purus ut magna accumsan, vitae faucibus turpis finibus. Integer eget gravida leo.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Fusce et est malesuada, ullamcorper odio non, tempor velit. Nullam commodo libero vel malesuada eleifend.
          Nulla facilisi. Sed nec ligula vitae felis ultricies venenatis. Aenean id neque ut lorem malesuada luctus.
        </p>
        <img src="https://via.placeholder.com/800x400" alt="About Us" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }} />
      </div>
    </div>
  );
}

export default About;

