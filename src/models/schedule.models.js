import { Schema, model } from "mongoose";

const scheduleSchema = new Schema({
  group_id: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  days: {
    type: [String],
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    required: true,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
});

scheduleSchema.index({ group_id: 1, days: 1 }, { unique: true });

export const Schedule = model("Schedule", scheduleSchema);
