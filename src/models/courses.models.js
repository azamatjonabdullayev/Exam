import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  course_name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  level: {
    type: String,
    required: true,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  is_active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
});

export const Course = model("Course", courseSchema);
