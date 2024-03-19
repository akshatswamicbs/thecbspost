import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; 

export default function Admin() {
  const [title, setTitle] = useState('');
  const [embedlink, setEmbedLink] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, embedlink })
      });
      if (response.ok) {
        setMessage('Video added successfully.');
        setTitle('');
        setEmbedLink('');
      } else {
        throw new Error('Failed to add video.');
      }
    } catch (error) {
      setMessage('Error adding video: ' + error.message);
    }
  }

  return (
    <div className="admin-container p-4">
      <h2 className="text-2xl font-bold mb-4">Add YouTube Video</h2>
      <form onSubmit={handleSubmit} className="video-form">
        <label className="block mb-2">Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="border border-gray-300 p-2 rounded mb-4" />
        <label className="block mb-2">YouTube Embed Link:</label>
        <input type="text" value={embedlink} onChange={(e) => setEmbedLink(e.target.value)} required className="border border-gray-300 p-2 rounded mb-4" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Video</button>
      </form>
      {message && <p className="message bg-gray-200 p-2 rounded mt-4">{message}</p>}
    </div>
  )
}
