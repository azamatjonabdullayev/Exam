import AttendanceService from "../services/attendance.service.js";

export default class AttendanceController {
  constructor() {
    this.service = new AttendanceService();
  }

  async addNewAttendance(req, res, next) {
    try {
      const newAttendance = await this.service.createAttendance(
        req.body,
        req.user.id
      );
      res.status(201).json(newAttendance);
    } catch (error) {
      next(error);
    }
  }

  async getAttendanceByLesson(req, res, next) {
    try {
      const lessons = await this.service.getAttendanceByLesson(
        req.params.leson_id
      );
      res.status(200).json(lessons);
    } catch (error) {
      next(error);
    }
  }
}
