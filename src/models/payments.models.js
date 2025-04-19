import { Schema, model } from "mongoose";

const paymentSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  group_id: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  amount: { type: Number, required: true },
  payment_date: { type: Date, default: Date.now },
  payment_method: {
    type: String,
    enum: ["cash", "card", "transfer"],
    default: "cash",
  },
  description: { type: String, required: true },
});

export const Payment = model("Payment", paymentSchema);
