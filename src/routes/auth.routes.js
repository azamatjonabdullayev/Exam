import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { authCheckMiddleware } from "../middlewares/joi.middleware.js";

export const authRoute = Router();
const controller = new AuthController();

authRoute.post("/auth/staff/login", authCheckMiddleware, (req, res, next) => {
  controller.signINStaff(req.body, res, next);
});

authRoute.post("/auth/student/login", authCheckMiddleware, (req, res, next) => {
  controller.signINStudent(req.body, res, next);
});
