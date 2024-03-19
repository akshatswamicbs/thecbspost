import Section from './models/Section.js';
import Subject from './models/Subject.js';
import Material from './models/Material.js';

// Create a new section
const newSection = new Section({
    title: 'BBA',
    description: 'Bachelor of Business Administration',
    image: 'https://example.com/bba.jpg',
    button: 'View Subjects'
});

// Create a new subject
const newSubject = new Subject({
    title: 'Financial Accounting',
    description: 'Study materials for Financial Accounting',
    image: 'https://example.com/financial-accounting.jpg',
    button: 'View Materials'
});

// Create a new material
const newMaterial = new Material({
    title: 'Financial Accounting Notes',
    description: 'Comprehensive notes for Financial Accounting',
    pdfUrl: 'https://example.com/financial-accounting-notes.pdf'
});

// Save the material
await newMaterial.save();

// Associate the material with the subject
newSubject.materials.push(newMaterial._id);
await newSubject.save();

// Associate the subject with the section
newSection.subjects.push(newSubject._id);
await newSection.save();