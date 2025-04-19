import { Course } from "../models/courses.models.js";
import { Group } from "../models/groups.models.js";
import { Teacher } from "../models/teachers.models.js";
import CustomError from "./error.service.js";

export default class GroupService {
  async createGroup({
    group_name,
    course_id,
    teacher_id,
    start_date,
    end_date,
    max_students,
    status,
  }) {
    const exists = await Group.findOne({ group_name });

    if (exists) throw new CustomError("Group already exists", 400);

    const course = await Course.findById(course_id);
    if (!course) throw new CustomError("Course not found", 404);

    const teacher = await Teacher.findById(teacher_id);
    if (!teacher) throw new CustomError("Teacher not found", 404);

    await Group.create({
      group_name,
      course_id,
      teacher_id,
      start_date,
      end_date,
      max_students,
      status,
    });

    return {
      success: true,
      group: await Group.findOne({ group_name })
        .populate("course_id")
        .populate("teacher_id"),
    };
  }

  async getAllGroups() {
    const allGroups = await Group.find()
      .populate("course_id")
      .populate("teacher_id");
    return {
      success: true,
      groups: allGroups,
    };
  }
}
