import { Router } from "express";
import {
  adminOnlyMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import { addStudentCheckMiddleware } from "../middlewares/joi.middleware.js";
import StudentController from "../controllers/students.controller.js";

export const studentRoute = Router();

const controller = new StudentController();

studentRoute.post(
  "/students/new",
  authMiddleware,
  adminOnlyMiddleware,
  addStudentCheckMiddleware,
  (req, res, next) => {
    controller.addStudent(req, res, next);
  }
);

studentRoute.get(
  "/students/all",
  authMiddleware,
  adminOnlyMiddleware,
  (req, res, next) => {
    controller.getStudents(req, res, next);
  }
);
