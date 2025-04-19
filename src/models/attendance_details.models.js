import { Schema, model } from "mongoose";

const attendance_detailSchema = new Schema({
  attendance_id: {
    type: Schema.Types.ObjectId,
    ref: "Attendance",
    required: true,
  },
  student_id: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  status: {
    type: String,
    enum: ["present", "absent", "late"],
    default: "present",
  },
});

attendance_detailSchema.index(
  { attendance_id: 1, student_id: 1 },
  { unique: true }
);

export const Attendance_detail = model(
  "Attendance_detail",
  attendance_detailSchema
);
