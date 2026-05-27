const mongoose =
  require("mongoose");

const taskSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
      },

      priority: {
        type: String,
        default: "Medium",
      },

      status: {
        type: String,
        default: "Todo",
      },

      dueDate: {
        type: String,
      },

      assignedUser: {
        type: String,
      },

      user: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",
      },
    },

    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Task",
    taskSchema
  );