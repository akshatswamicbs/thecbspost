import React from 'react';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>Insta Concepts</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <img src="https://via.placeholder.com/300" alt="Placeholder" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus libero. Nullam ut elit ut nulla tincidunt lobortis.</p>
          </div>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <img src="https://via.placeholder.com/300" alt="Placeholder" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus libero. Nullam ut elit ut nulla tincidunt lobortis.</p>
          </div>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <img src="https://via.placeholder.com/300" alt="Placeholder" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id maximus libero. Nullam ut elit ut nulla tincidunt lobortis.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
