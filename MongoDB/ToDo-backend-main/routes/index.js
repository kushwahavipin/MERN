const express = require("express");
const router = express.Router();
const Task = require("./users"); // Ensure the path and model name are correct



router.get("/alldata", async function (req, res, next) {
  try {
    const allUsers = await Task.find();
    res.send(allUsers);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { title, completed } = req.body;

    // Check if title is provided
    if (!title) {
      return res.status(400).send({ error: "Title is required" });
    }

    // Create a new task with provided data
    const newTask = new Task({ title, completed });

    // Save the task to the database
    const savedTask = await newTask.save();

    console.log("Task created:", savedTask);
    res.status(201).send(savedTask);
  } catch (err) {
    console.error("Error creating task:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
router.post('/delete', async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res.status(400).send({ error: 'Task ID is required' });
    }

    const deletedTask = await Task.findByIdAndDelete(_id);

    if (!deletedTask) {
      return res.status(404).send({ error: 'Task not found' });
    }

    res.send({ message: 'Task deleted successfully', task: deletedTask });
  } catch (err) {
    console.error('Error deleting task:', err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

router.post('/update-completed', async (req, res) => {
  try {
    const { _id, completed } = req.body;

    if (!_id) {
      return res.status(400).send({ error: 'Task ID is required' });
    }
    if (completed === undefined) {
      return res.status(400).send({ error: 'Completed status is required' });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      _id,
      { completed, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).send({ error: 'Task not found' });
    }

    res.send(updatedTask);
  } catch (err) {
    console.error('Error updating task completed status:', err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

router.post('/update-title', async (req, res) => {
  try {
    const { _id, title } = req.body;

    if (!_id) {
      return res.status(400).send({ error: 'Task ID is required' });
    }
    if (!title) {
      return res.status(400).send({ error: 'Title is required' });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      _id,
      { title, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).send({ error: 'Task not found' });
    }

    res.send(updatedTask);
  } catch (err) {
    console.error('Error updating task title:', err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});


module.exports = router;
