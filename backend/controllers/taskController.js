const Task =
  require("../models/Task");

const getTasks = async (
  req,
  res
) => {
  try {
    const tasks =
      await Task.find({
        user: req.user._id,
      });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch tasks",
    });
  }
};

const createTask =
  async (req, res) => {
    try {
      const {
        title,
        description,
        priority,
        status,
        dueDate,
        assignedUser,
      } = req.body;

      const task =
        await Task.create({
          title,
          description,
          priority,
          status,
          dueDate,
          assignedUser,

          user:
            req.user._id,
        });

      res.status(201).json(
        task
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Task creation failed",
      });
    }
  };

const deleteTask =
  async (req, res) => {
    try {
      const task =
        await Task.findById(
          req.params.id
        );

      if (!task) {
        return res
          .status(404)
          .json({
            message:
              "Task not found",
          });
      }

      await task.deleteOne();

      res.json({
        message:
          "Task deleted",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Delete failed",
      });
    }
  };

const updateTask =
  async (req, res) => {
    try {
      const task =
        await Task.findById(
          req.params.id
        );

      if (!task) {
        return res
          .status(404)
          .json({
            message:
              "Task not found",
          });
      }

      task.title =
        req.body.title ||
        task.title;

      task.description =
        req.body
          .description ||
        task.description;

      task.priority =
        req.body.priority ||
        task.priority;

      task.status =
        req.body.status ||
        task.status;

      task.dueDate =
        req.body.dueDate ||
        task.dueDate;

      task.assignedUser =
        req.body
          .assignedUser ||
        task.assignedUser;

      const updatedTask =
        await task.save();

      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({
        message:
          "Update failed",
      });
    }
  };

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};