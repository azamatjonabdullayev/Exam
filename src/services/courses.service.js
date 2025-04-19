import { Course } from "../models/courses.models.js";
import CustomError from "./error.service.js";

export default class CourseService {
  async createCourse({ course_name, description, price, duration, level }) {
    const exists = await Course.findOne({ course_name });
    if (exists) throw new CustomError("Course already exists", 400);

    const newCourse = await Course.create({
      course_name,
      description,
      price,
      duration,
      level,
    });

    return {
      success: true,
      course: newCourse.toObject(),
    };
  }

  async getAllCourses() {
    const allCourses = await Course.find();

    return {
      success: true,
      courses: allCourses,
    };
  }
}
