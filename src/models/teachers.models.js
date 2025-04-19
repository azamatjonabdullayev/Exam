import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
  staff_id: { type: Schema.Types.ObjectId, ref: "Staff", required: true },
  specialization: { type: String, required: true },
  education: { type: String, required: true },
  experience: { type: Number, required: true },
});

export const Teacher = model("Teacher", teacherSchema);
