import CustomError from "../services/error.service.js";
import JwtService from "../services/jwt.service.js";

const jwt = new JwtService();

export const authMiddleware = (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new CustomError("Unauthorized", 401);
    const token = req.headers.authorization.split(" ")[1];

    if (!token) throw new CustomError("Unauthorized", 401);

    const verified = jwt.verifyToken(token);

    if (!verified) throw new CustomError("Unauthorized", 401);

    req.user = { id: verified.id, role: verified.role };

    next();
  } catch (error) {
    next(error);
  }
};

export const adminOnlyMiddleware = (req, res, next) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "superadmin")
      throw new CustomError("Forbidden", 403);

    next();
  } catch (error) {
    next(error);
  }
};
