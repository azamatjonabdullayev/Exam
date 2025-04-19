import StudentService from "../services/students.service.js";

export default class StudentController {
  constructor() {
    this.service = new StudentService();
  }
  async addStudent(req, res, next) {
    try {
      const newStudent = await this.service.createStudent(req.body);
      res.status(201).json(newStudent);
    } catch (error) {
      next(error);
    }
  }

  async getStudents(req, res, next) {
    try {
      const students = await this.service.getAllStudents();
      res.status(200).json(students);
    } catch (error) {
      next(error);
    }
  }
}
