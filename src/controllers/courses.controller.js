import CourseService from "../services/courses.service.js";

export default class CourseController {
  constructor() {
    this.service = new CourseService();
  }
  async createNewCourse(req, res, next) {
    try {
      const newCourse = await this.service.createCourse(req.body);
      res.status(201).json(newCourse);
    } catch (error) {
      next(error);
    }
  }

  async getCourses(req, res, next) {
    try {
      const courses = await this.service.getAllCourses();
      res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  }
}
