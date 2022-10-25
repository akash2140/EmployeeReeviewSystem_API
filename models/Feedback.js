const { Schema, model } = require("mongoose");
const feedbackSchema = new Schema(
  {
    feedbackBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    feedbackFor: {
      type: Schema.Types.ObjectId,
      ref: "Performance",
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Feedback = model("Feedback", feedbackSchema);
module.exports = Feedback;
