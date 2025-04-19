import { Router } from "express";
import StaffController from "../controllers/staff.controller.js";
import {
  adminOnlyMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import {
  addStaffCheckMiddleware,
  addTeacherCheckMiddleware,
} from "../middlewares/joi.middleware.js";

export const staffRoute = Router();
const controller = new StaffController();

staffRoute.post(
  "/staff/new",
  authMiddleware,
  adminOnlyMiddleware,
  addStaffCheckMiddleware,
  (req, res, next) => {
    controller.newEmployee(req, res, next);
  }
);

staffRoute.get(
  "/staff/all",
  authMiddleware,
  adminOnlyMiddleware,
  (req, res, next) => {
    controller.getEmployees(req, res, next);
  }
);

staffRoute.post(
  "/staff/teacher/new",
  authMiddleware,
  adminOnlyMiddleware,
  addTeacherCheckMiddleware,
  (req, res, next) => {
    controller.newTeacher(req, res, next);
  }
);
staffRoute.get(
  "/teachers/all",
  authMiddleware,
  adminOnlyMiddleware,
  (req, res, next) => {
    controller.getTeachers(req, res, next);
  }
);
