import { Schema, model } from "mongoose";

const lessonSchema = new Schema({
  group_id: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  lesson_date: { type: Date, required: true },
  start_time: { type: String, required: true },
  end_time: { type: String, required: true },
  room: { type: String, required: true },
  created_by: { type: Schema.Types.ObjectId, ref: "Staff", required: true },
  created_at: { type: Date, default: Date.now },
});

export const Lesson = model("Lessons", lessonSchema);
