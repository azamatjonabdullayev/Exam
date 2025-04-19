import { Router } from "express";
import AttendanceController from "../controllers/attendance.controller.js";
import {
  adminOnlyMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import { addAttendanceCheckMiddleware } from "../middlewares/joi.middleware.js";

export const attendance_routes = Router();
const controller = new AttendanceController();

attendance_routes.post(
  "/lessons/attendance/new",
  authMiddleware,
  adminOnlyMiddleware,
  addAttendanceCheckMiddleware,
  (req, res, next) => controller.addNewAttendance(req, res, next)
);

attendance_routes.get(
  "/lessons/:lesson_id/attendance",
  authMiddleware,
  adminOnlyMiddleware,
  (req, res, next) => controller.getAttendanceByLesson(req, res, next)
);
