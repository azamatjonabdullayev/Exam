import PaymentService from "../services/payments.service.js";

export default class PaymentController {
  constructor() {
    this.service = new PaymentService();
  }

  async newPayment(req, res, next) {
    try {
      const payment = await this.service.createPayment(req.body);
      res.status(201).json(payment);
    } catch (error) {
      next(error);
    }
  }
}
