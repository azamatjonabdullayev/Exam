import LessonService from "../services/lessons.service.js";

export default class LessonController {
  constructor() {
    this.service = new LessonService();
  }

  async addNewLesson(req, res, next) {
    try {
      const newLesson = await this.service.createLesson(req.body, req.user.id);
      res.status(201).json(newLesson);
    } catch (error) {
      next(error);
    }
  }

  async getLessonById(req, res, next, group_id) {
    try {
      const lessons = await this.service.getLessonById(group_id);
      res.status(200).json(lessons);
    } catch (error) {
      next(error);
    }
  }
}
