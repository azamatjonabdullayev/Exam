import { Router } from "express";
import LessonController from "../controllers/lessons.controller.js";
import {
  adminOnlyMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import { addLessonCheckMiddleware } from "../middlewares/joi.middleware.js";

export const lessonRoutes = Router();
const controller = new LessonController();

lessonRoutes.post(
  "/lessons/new",
  authMiddleware,
  adminOnlyMiddleware,
  addLessonCheckMiddleware,
  (req, res, next) => {
    controller.addNewLesson(req, res, next);
  }
);

lessonRoutes.get(
  "/lessons/:group_id/lessons",
  authMiddleware,
  adminOnlyMiddleware,
  (req, res, next) => {
    controller.getLessonById(req, res, next, req.params.group_id);
  }
);
