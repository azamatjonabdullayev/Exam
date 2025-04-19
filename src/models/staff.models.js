import { Schema, model } from "mongoose";

const staffSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["superadmin", "admin", "teacher", "receptionist"],
    default: "teacher",
    required: true,
  },
  position: { type: String, required: true },
  phone_number: { type: String, required: true },
  address: { type: String, required: true },
  status: {
    type: String,
    enum: ["active", "fired", "suspended"],
    default: "active",
  },
  hire_date: { type: Date, default: Date.now },
});

export const Staff = model("Staff", staffSchema);
