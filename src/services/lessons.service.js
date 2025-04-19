import { Group } from "../models/groups.models.js";
import { Lesson } from "../models/lessons.models.js";
import CustomError from "./error.service.js";

export default class LessonService {
  async createLesson(
    { group_id, title, description, lesson_date, start_time, end_time, room },
    created_by
  ) {
    const exists = await Lesson.findOne({ title });
    if (exists) throw new CustomError("Lesson already exists", 400);

    const newLesson = await Lesson.create({
      group_id,
      title,
      description,
      lesson_date,
      start_time,
      end_time,
      room,
      created_by,
    });

    return {
      success: true,
      lesson: newLesson.toObject(),
    };
  }

  async getLessonById(id) {
    const lesson = await Lesson.findOne({ group_id: id })
      .populate("group_id")
      .populate("created_by");

    return {
      success: true,
      lessons: lesson,
    };
  }
}
