import { Router } from "express";
import {
  adminOnlyMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import { addGroupCheckMiddleware } from "../middlewares/joi.middleware.js";
import GroupController from "../controllers/groups.controller.js";

export const groupRoutes = Router();
const controller = new GroupController();

groupRoutes.post(
  "/groups/new",
  authMiddleware,
  adminOnlyMiddleware,
  addGroupCheckMiddleware,
  (req, res, next) => {
    controller.createNewGroup(req, res, next);
  }
);

groupRoutes.get(
  "/groups/all",
  authMiddleware,
  adminOnlyMiddleware,
  (req, res, next) => {
    controller.getGroups(req, res, next);
  }
);
