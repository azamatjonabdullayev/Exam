import { Staff } from "../models/staff.models.js";
import { Student } from "../models/students.models.js";
import BcryptService from "./bcrypt.service.js";
import CustomError from "./error.service.js";
import JwtService from "./jwt.service.js";

export default class AuthService {
  constructor() {
    this.jwt = new JwtService();
    this.bcrypt = new BcryptService();
  }

  async loginStaff({ username, password }) {
    const exists = await Staff.findOne({ username });

    if (!exists) throw new CustomError("Unauthorized", 401);

    const compare = await this.bcrypt.ComparePasswords(
      password,
      exists.password
    );

    if (!compare) throw new CustomError("Unauthorized", 401);

    const token = this.jwt.signToken({
      id: exists._id,
      username: exists.username,
      role: exists.role,
    });

    return {
      success: true,
      token,
      staff: {
        id: exists._id,
        first_name: exists.first_name,
        last_name: exists.last_name,
        username,
        role: exists.role,
        position: exists.position,
      },
    };
  }

  async loginStudent({ username, password }) {
    const exists = await Student.findOne({ username: username });

    if (!exists) throw new CustomError("Unauthorized", 401);

    const compare = await this.bcrypt.ComparePasswords(
      password,
      exists.password
    );

    if (!compare) throw new CustomError("Unauthorized", 401);

    const token = this.jwt.signToken({
      id: exists._id,
      username: exists.username,
    });

    return {
      success: true,
      token,
      student: {
        id: exists._id,
        first_name: exists.first_name,
        last_name: exists.last_name,
        username,
      },
    };
  }
}
