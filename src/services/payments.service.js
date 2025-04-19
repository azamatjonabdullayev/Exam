import { Group } from "../models/groups.models.js";
import { Payment } from "../models/payments.models.js";
import { Student } from "../models/students.models.js";

export default class PaymentService {
  async createPayment({
    student_id,
    group_id,
    amount,
    payment_date,
    payment_method,
    description,
  }) {
    const [student, group] = [
      await Student.findById(student_id),
      await Group.findById(group_id),
    ];

    if (!student) throw new Error("Student not found");
    if (!group) throw new Error("Group not found");

    const payment = Payment.create({
      student_id,
      group_id,
      amount,
      payment_date,
      payment_method,
      description,
    });

    return {
      success: true,
      message: "Payment created successfully",
      payment,
    };
  }
}
