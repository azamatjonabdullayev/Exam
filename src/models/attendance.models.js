import { Schema, model } from "mongoose";

const attendanceSchema = new Schema({
  lesson_id: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
  created_by: { type: Schema.Types.ObjectId, ref: "Staff", required: true },
  created_at: { type: Date, default: Date.now },
});

export const Attendance = model("Attendance", attendanceSchema);
