import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String, required: true },
  address: { type: String, required: true },
  birth_date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["active", "suspended", "graduated"],
    default: "active",
  },
  enrolment_date: { type: Date, default: Date.now },
});

export const Student = model("Student", studentSchema);
