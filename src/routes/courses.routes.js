import { Router } from "express";
import CourseController from "../controllers/courses.controller.js";
import {
  adminOnlyMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import { addCourseCheckMiddleware } from "../middlewares/joi.middleware.js";

export const courseRoute = Router();
const controller = new CourseController();

courseRoute.post(
  "/courses/new",
  authMiddleware,
  adminOnlyMiddleware,
  addCourseCheckMiddleware,
  (req, res, next) => {
    controller.createNewCourse(req, res, next);
  }
);

courseRoute.get(
  "/courses/all",
  authMiddleware,
  adminOnlyMiddleware,
  (req, res, next) => {
    controller.getCourses(req, res, next);
  }
);
