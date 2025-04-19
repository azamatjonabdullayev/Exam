import mongoose from "mongoose";
import { Attendance } from "../models/attendance.models.js";
import { Attendance_detail } from "../models/attendance_details.models.js";
import { Lesson } from "../models/lessons.models.js";
import { Staff } from "../models/staff.models.js";
import { Student } from "../models/students.models.js";
import CustomError from "./error.service.js";
import { Schedule } from "../models/schedule.models.js";

export default class AttendanceService {
  async createAttendance({ lesson_id, student_id, status }, created_by) {
    const staffExists = await Staff.findById(created_by);
    if (!staffExists) throw new CustomError("Staff not found", 404);

    const studentExists = await Student.findById(student_id);
    if (!studentExists) throw new CustomError("Student not found", 404);

    const lessonExists = await Lesson.findById(lesson_id);
    if (!lessonExists) throw new CustomError("Lesson not found", 404);

    const newAttendance = await Attendance.create({
      lesson_id,
      created_by,
    });

    const newAttendanceDetail = await Attendance_detail.create({
      attendance_id: newAttendance._id,
      student_id,
      status,
    });

    return {
      success: true,
      attendance: {
        id: newAttendanceDetail._id,
        lesson_id,
        created_by,
        created_at: newAttendance.created_at,
        details: [
          {
            student_id,
            status,
          },
        ],
      },
    };
  }

  async getAttendanceByLesson(id) {
    const attendanceDetails = await Attendance.aggregate([
      { $match: { lesson_id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "attendance_details",
          localField: "_id",
          foreignField: "attendance_id",
          as: "details",
        },
      },
      { $unwind: "$details" },
      {
        $lookup: {
          from: "students",
          localField: "details.student_id",
          foreignField: "_id",
          as: "details.student",
        },
      },
      { $unwind: "$details.student" },
    ]);

    return {
      success: true,
      attendance: attendanceDetails,
    };
  }
}
