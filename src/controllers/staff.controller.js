import StaffService from "../services/staff.service.js";

export default class StaffController {
  constructor() {
    this.staffService = new StaffService();
  }
  async newEmployee(req, res, next) {
    try {
      const employee = await this.staffService.createEmployee(req.body);
      res.status(201).json(employee);
    } catch (error) {
      next(error);
    }
  }
  async getEmployees(req, res, next) {
    try {
      const allEmployees = await this.staffService.getAllStaff();
      res.status(200).json(allEmployees);
    } catch (error) {
      next(error);
    }
  }

  async newTeacher(req, res, next) {
    try {
      const teacher = await this.staffService.addTeacher(req.body);
      res.status(201).json(teacher);
    } catch (error) {
      next(error);
    }
  }

  async getTeachers(req, res, next) {
    try {
      const allTeachers = await this.staffService.getAllTeachers();
      res.status(200).json(allTeachers);
    } catch (error) {
      next(error);
    }
  }
}
