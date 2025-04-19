import jsonwebtoken from "jsonwebtoken";

export default class JwtService {
  constructor() {
    this.jwt = jsonwebtoken;
  }

  signToken(data) {
    return this.jwt.sign(data, process.env.JWT_KEY, { expiresIn: "3h" });
  }

  verifyToken(token) {
    return this.jwt.verify(token, process.env.JWT_KEY);
  }
}
