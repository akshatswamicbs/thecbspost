// import React from 'react';
// import Card from '../components/Card.jsx';

// export default function Videos() {
//   const videoSources = [
//     "https://www.youtube.com/embed/YTB5jUQAFHs?si=Qdoe18DOtN_AOHEA",
//     "https://www.youtube.com/embed/mttqkB-pKis?si=BGQ5Orj7nh3wSUVj",
//     "https://www.youtube.com/embed/MEDLiPwj5ls?si=8aygnk8SIjt-KbPq",
//     "https://www.youtube.com/embed/eU4iMG9W-K0?si=tt63klHMRijDTCYG",
//     "https://www.youtube.com/embed/24gD_X8BXWo?si=G2X3sins18O65chQ",
//     "https://www.youtube.com/embed/-E_f_mgtIoY?si=hBq4g4v0lwyh_1kG"
//   ];

//   return (
//     <>
//       <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '2rem', textTransform: 'uppercase' }}>Latest Videos</h1>
//       <div style={{ width: '100vw', height: '40vh', display: 'flex', justifyContent: 'space-around' }}>
//         {videoSources.slice(0, 3).map((source, index) => (
//           <Card key={index} source={source} />
//         ))}
//       </div>
//       <div style={{ width: '100vw', display: 'flex', justifyContent: 'space-around' }}>
//         {videoSources.slice(3).map((source, index) => (
//           <Card key={index + 3} source={source} />
//         ))}
//       </div>
//     </>
//   );
// }
// Videos.jsx

// import React, { useState } from 'react';
// import Card from '../components/Card.jsx';

// export default function Videos() {
//   const videoSources = [
//     "https://www.youtube.com/embed/YTB5jUQAFHs?si=Qdoe18DOtN_AOHEA",
//     "https://www.youtube.com/embed/mttqkB-pKis?si=BGQ5Orj7nh3wSUVj",
//     "https://www.youtube.com/embed/MEDLiPwj5ls?si=8aygnk8SIjt-KbPq",
//     "https://www.youtube.com/embed/eU4iMG9W-K0?si=tt63klHMRijDTCYG",
//     "https://www.youtube.com/embed/24gD_X8BXWo?si=G2X3sins18O65chQ",
//     "https://www.youtube.com/embed/-E_f_mgtIoY?si=hBq4g4v0lwyh_1kG"
//   ];

//   const [enlargedIndex, setEnlargedIndex] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [videosPerPage] = useState(6); // Number of videos per page

//   // Pagination
//   const indexOfLastVideo = currentPage * videosPerPage;
//   const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
//   const currentVideos = videoSources.slice(indexOfFirstVideo, indexOfLastVideo);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const toggleEnlarged = (index) => {
//     setEnlargedIndex(enlargedIndex === index ? null : index);
//   };

//   const handleViewAll = () => {
//     setCurrentPage(1); // Reset pagination to page 1
//   };

//   return (
//     <div style={{ margin: '20px auto', maxWidth: '1200px', padding: '0 20px' }}>
//       <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '2rem', textTransform: 'uppercase' }}>Latest Videos</h1>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
//         {currentVideos.map((source, index) => (
//           <Card key={index} source={source} onClick={() => toggleEnlarged(index)} enlarged={enlargedIndex === index} />
//         ))}
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//         {Array.from({ length: Math.ceil(videoSources.length / videosPerPage) }, (_, i) => (
//           <button key={i} onClick={() => paginate(i + 1)} style={{ margin: '0 5px', padding: '5px 10px', border: '1px solid #333', borderRadius: '5px', backgroundColor: currentPage === i + 1 ? '#333' : 'transparent', color: currentPage === i + 1 ? '#fff' : '#333', cursor: 'pointer' }}>{i + 1}</button>
//         ))}
//         <button onClick={handleViewAll} style={{ margin: '0 5px', padding: '5px 10px', border: '1px solid #333', borderRadius: '5px', backgroundColor: currentPage === 1 ? '#333' : 'transparent', color: currentPage === 1 ? '#fff' : '#333', cursor: 'pointer' }}>View All</button>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [videosPerRow, setVideosPerRow] = useState(4);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/videos');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error.message);
        setVideos([]); 
      }
    };

    fetchVideos();

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 576) {
        setVideosPerRow(1);
      } else if (screenWidth <= 768) {
        setVideosPerRow(2);
      } else if (screenWidth <= 992) {
        setVideosPerRow(3);
      } else {
        setVideosPerRow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videoWidth = `${100 / videosPerRow}%`;
  const thumbnailWidth = 300; 
  const thumbnailHeight = 169; 

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {videos.map((video, index) => (
        <div key={index} style={{ width: videoWidth, margin: '10px', textAlign: 'center' }}>
          <YouTube videoId={getVideoId(video.embedlink)} opts={{ width: thumbnailWidth, height: thumbnailHeight }} />
        </div>
      ))}
    </div>
  );
};

// Function to extract video ID from embed link
const getVideoId = (embedlink) => {
  const parts = embedlink.split('/');
  return parts[parts.length - 1];
};

export default Videos;