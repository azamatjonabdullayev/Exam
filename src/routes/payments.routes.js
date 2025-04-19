import { Router } from "express";
import PaymentController from "../controllers/payments.controller.js";
import {
  adminOnlyMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import { addPaymentCheckMiddleware } from "../middlewares/joi.middleware.js";

export const paymentRoute = Router();
const controller = new PaymentController();

paymentRoute.post(
  "/payments/new",
  authMiddleware,
  adminOnlyMiddleware,
  addPaymentCheckMiddleware,
  (req, res, next) => controller.newPayment(req, res, next)
);
