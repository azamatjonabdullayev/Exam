import ScheduleService from "../services/schedule.service.js";

export default class ScheduleController {
  constructor() {
    this.service = new ScheduleService();
  }
  async addNewSchedule(req, res, next) {
    try {
      const schedule = await this.service.createSchedule(req.body);
      res.status(201).json(schedule);
    } catch (error) {
      next(error);
    }
  }

  async getSchedules(req, res, next) {
    try {
      const schedules = await this.service.getAllSchedule();
      res.status(200).json(schedules);
    } catch (error) {
      next(error);
    }
  }
}
