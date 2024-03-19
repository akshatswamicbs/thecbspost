import React, { useState, useEffect } from 'react';
import './AdminStudyMaterial.css';

const AdminStudyMaterial = () => {
  const [sectionName, setSectionName] = useState('');
  const [sectionTitle, setSectionTitle] = useState('');
  const [sectionDescription, setSectionDescription] = useState('');
  const [sectionImage, setSectionImage] = useState('');
  const [sectionButton, setSectionButton] = useState('');

  const [subjectTitle, setSubjectTitle] = useState('');
  const [subjectDescription, setSubjectDescription] = useState('');
  const [subjectImage, setSubjectImage] = useState('');
  const [subjectButton, setSubjectButton] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState('');
  const [selectedSectionName, setSelectedSectionName] = useState('');


  const [materialTitle, setMaterialTitle] = useState('');
  const [materialDescription, setMaterialDescription] = useState('');
  const [materialPdfUrl, setMaterialPdfUrl] = useState('');
  const [selectedSubjectName, setSelectedSubjectName] = useState('');

  const [successMessage, setSuccessMessage] = useState('');

  const handleAddSection = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/studymaterial/sections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: sectionName,
          title: sectionTitle,
          description: sectionDescription,
          image: sectionImage,
          button: sectionButton
        })
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Section added successfully!');
        setSectionName('');
        setSectionTitle('');
        setSectionDescription('');
        setSectionImage('');
        setSectionButton('');
      } else {
        setSuccessMessage('Error adding section.');
      }
    } catch (error) {
      console.error('Error adding section:', error);
      setSuccessMessage('Error adding section.');
    }
  };

  const handleAddSubject = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/studymaterial/subjects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sectionId: selectedSectionId,
          title: subjectTitle,
          description: subjectDescription,
          image: subjectImage,
          button: subjectButton
        })
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Subject added successfully!');
        setSubjectTitle('');
        setSubjectDescription('');
        setSubjectImage('');
        setSubjectButton('');
        setSelectedSectionId('');
      } else {
        setSuccessMessage('Error adding subject.');
      }
    } catch (error) {
      console.error('Error adding subject:', error);
      setSuccessMessage('Error adding subject.');
    }
  };

  const handleAddMaterial = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/studymaterial/materials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subjectName: selectedSubjectName,
          title: materialTitle,
          description: materialDescription,
          pdfUrl: materialPdfUrl
        })
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Material added successfully!');
        setMaterialTitle('');
        setMaterialDescription('');
        setMaterialPdfUrl('');
        setSelectedSubjectName('');
      } else {
        setSuccessMessage('Error adding material.');
      }
    } catch (error) {
      console.error('Error adding material:', error);
      setSuccessMessage('Error adding material.');
    }
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-section">
        <h2>Add Section</h2>
        <input type="text" value={sectionName} onChange={e => setSectionName(e.target.value)} placeholder="Section Name" />
        <input type="text" value={sectionTitle} onChange={e => setSectionTitle(e.target.value)} placeholder="Section Title" />
        <input type="text" value={sectionDescription} onChange={e => setSectionDescription(e.target.value)} placeholder="Section Description" />
        <input type="text" value={sectionImage} onChange={e => setSectionImage(e.target.value)} placeholder="Section Image URL" />
        <input type="text" value={sectionButton} onChange={e => setSectionButton(e.target.value)} placeholder="Section Button Text" />
        <button onClick={handleAddSection}>Add Section</button>
        {successMessage === 'Section added successfully!' && <p>{successMessage}</p>}
      </div>
      <div className="admin-dashboard-section">
        <h2>Add Subject</h2>
        <input type="text" value={subjectTitle} onChange={e => setSubjectTitle(e.target.value)} placeholder="Subject Title" />
        <input type="text" value={subjectDescription} onChange={e => setSubjectDescription(e.target.value)} placeholder="Subject Description" />
        <input type="text" value={subjectImage} onChange={e => setSubjectImage(e.target.value)} placeholder="Subject Image URL" />
        <input type="text" value={subjectButton} onChange={e => setSubjectButton(e.target.value)} placeholder="Subject Button Text" />
        <input type="text" value={selectedSectionId} onChange={e => setSelectedSectionId(e.target.value)} placeholder="Section Id" />
        <button onClick={handleAddSubject} disabled={!selectedSectionId}>Add Subject</button>
        {successMessage && <p>{successMessage}</p>}
      </div>
      <div className="admin-dashboard-section">
        <h2>Add Material</h2>
        <input type="text" value={materialTitle} onChange={e => setMaterialTitle(e.target.value)} placeholder="Material Title" />
        <input type="text" value={materialDescription} onChange={e => setMaterialDescription(e.target.value)} placeholder="Material Description" />
        <input type="text" value={materialPdfUrl} onChange={e => setMaterialPdfUrl(e.target.value)} placeholder="Material PDF URL" />
        <input type="text" value={selectedSubjectName} onChange={e => setSelectedSubjectName(e.target.value)} placeholder="Subject Name" />
        <button onClick={handleAddMaterial} disabled={!selectedSubjectName}>Add Material</button>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
};

export default AdminStudyMaterial;