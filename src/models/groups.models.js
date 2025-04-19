import { Schema, model } from "mongoose";

const groupSchema = new Schema({
  group_name: { type: String, required: true },
  course_id: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  teacher_id: { type: Schema.Types.ObjectId, ref: "Staff", required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  max_students: { type: Number, default: 20 },
  status: {
    type: String,
    enum: ["active", "inactive", "planned", "completed"],
    default: "active",
  },
  created_at: { type: Date, default: Date.now },
});

export const Group = model("Group", groupSchema);
