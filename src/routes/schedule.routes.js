import { Router } from "express";
import {
  adminOnlyMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import { addScheduleCheckMiddleware } from "../middlewares/joi.middleware.js";
import ScheduleController from "../controllers/schedule.controller.js";

export const scheduleRoute = Router();
const controller = new ScheduleController();

scheduleRoute.post(
  "/schedules/new",
  authMiddleware,
  adminOnlyMiddleware,
  addScheduleCheckMiddleware,
  (req, res, next) => {
    controller.addNewSchedule(req, res, next);
  }
);

scheduleRoute.get(
  "/schedules/all",
  authMiddleware,
  adminOnlyMiddleware,
  (req, res, next) => {
    controller.getSchedules(req, res, next);
  }
);
