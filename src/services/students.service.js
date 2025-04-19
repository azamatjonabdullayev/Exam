import { Student } from "../models/students.models.js";
import BcryptService from "./bcrypt.service.js";
import CustomError from "./error.service.js";

export default class StudentService {
  constructor() {
    this.bcrypt = new BcryptService();
  }

  async createStudent({
    first_name,
    last_name,
    username,
    password,
    phone_number,
    address,
    birth_date,
    status,
  }) {
    const exists = await Student.findOne({ username });

    if (exists) throw new CustomError("Username already taken", 400);

    const hashedPassword = await this.bcrypt.hashPassword(password);

    await Student.create({
      first_name,
      last_name,
      username,
      password: hashedPassword,
      phone_number,
      address,
      birth_date,
      status,
    });

    return {
      success: true,
      student: await Student.findOne({ username }, { password: 0 }),
    };
  }

  async getAllStudents() {
    const allStudents = await Student.find({}, { password: 0 });
    return {
      success: true,
      students: allStudents,
    };
  }
}
