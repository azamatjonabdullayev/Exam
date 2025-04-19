import { Schema, model } from "mongoose";

const student_groupSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  group_id: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  join_date: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["active", "left", "suspended", "graduated"],
    default: "active",
  },
  created_at: { type: Date, default: Date.now },
});

student_groupSchema.index({ group_id: 1, student_id: 1 }, { unique: true });

export const Student_group = model("Student_group", student_groupSchema);
