const express = require('express');
const multer = require('multer');
const router = express.Router();
const Member = require('../models/Member');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try {
      const members = await Member.find();
      res.json(members);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch members' });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) return res.status(404).json({ error: 'Member not found' });
      res.json(member);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch member' });
    }
  });
  

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, role, email } = req.body;
    const image = req.file.filename;

    const member = new Member({ name, role, email, image });
    await member.save();

    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add member' });
  }
});

module.exports = router;
