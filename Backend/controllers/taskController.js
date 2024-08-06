
const taskModel = require("../models/taskModel");

const addtask = async (req, res) => {
    const {
      title,
      description,
      duration,
    } = req.body;
    try {
  
      const result = await taskModel.create({
        title,
        duration,
        description
       
      });
      
      res.status(201).json({ result });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.log(error);
    }
  };

//get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel
      .find()
      .sort({ title: 1 });
     // console.log(tasks);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: "Interal server error" });
  }
}

//Get a single task
const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskModel.findById(id)
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: "Interal server error" });
  }
};

  module.exports = {
    addtask,
    getTasks
  }
  