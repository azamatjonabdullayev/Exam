import AuthService from "../services/auth.service.js";

export default class AuthController {
  constructor() {
    this.service = new AuthService();
  }
  async signINStaff({ username, password }, res, next) {
    try {
      const token = await this.service.loginStaff({ username, password });
      res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }

  async signINStudent({ username, password }, res, next) {
    try {
      const token = await this.service.loginStudent({ username, password });
      res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }
}
