// server/routes/tasks.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');

// POST /api/tasks - Create a new task (Existing Code)
router.post('/', auth, async (req, res) => {
  try {
    const { title, summary, status } = req.body;
    const newTask = new Task({
      Title: title,
      Summary: summary,
      Status: status,
      userId: req.user.id,
      Type: 'Story',
      Priority: 'Normal',
    });
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (err) {
    console.error('Error creating task:', err.message);
    res.status(500).send('Server Error');
  }
});

// GET /api/tasks - Get all tasks for a user (Existing Code)
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// --- ADD THIS NEW BLOCK ---
// @route   DELETE api/tasks/:id
// @desc    Delete a task
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    // Ensure user owns the task
    if (task.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Task.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Task removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;