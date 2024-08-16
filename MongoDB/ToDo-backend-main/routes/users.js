const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://vipinkushwaha:vipinkushwaha@todo.abvbj.mongodb.net/Task28?retryWrites=true&w=majority&appName=ToDo"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => console.log(err));

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", TaskSchema); // Renamed to 'Task'
module.exports = Task;
