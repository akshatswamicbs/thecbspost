import express from 'express';
import Section from '../models/section.model.js';
import Subject from '../models/subject.model.js';
import Material from '../models/material.model.js';

const router = express.Router();

// Create a new section
router.post('/sections', async (req, res) => {
  try {
    const newSection = new Section(req.body);
    await newSection.save();
    res.status(201).json(newSection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all sections
router.get('/sections', async (req, res) => {
  try {
    const sections = await Section.find().populate('subjects');
    res.json(sections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new subject
router.post('/subjects', async (req, res) => {
  try {
    const newSubject = new Subject(req.body);
    const savedSubject = await newSubject.save();
    const section = await Section.findById(req.body.sectionId);
    section.subjects.push(savedSubject._id);
    await section.save();
    res.status(201).json(savedSubject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all subjects for a section
router.get('/sections/:sectionId/subjects', async (req, res) => {
  try {
    const section = await Section.findById(req.params.sectionId).populate('subjects');
    res.json(section.subjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new material
router.post('/materials', async (req, res) => {
  try {
    const newMaterial = new Material(req.body);
    const savedMaterial = await newMaterial.save();
    const subject = await Subject.findById(req.body.subjectId);
    subject.materials.push(savedMaterial._id);
    await subject.save();
    res.status(201).json(savedMaterial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all materials for a subject
router.get('/subjects/:subjectId/materials', async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.subjectId).populate('materials');
    res.json(subject.materials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;