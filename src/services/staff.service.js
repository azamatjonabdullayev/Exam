import { Staff } from "../models/staff.models.js";
import { Teacher } from "../models/teachers.models.js";
import BcryptService from "./bcrypt.service.js";
import CustomError from "./error.service.js";

export default class StaffService {
  constructor() {
    this.bcrypt = new BcryptService();
  }
  async createEmployee({
    first_name,
    last_name,
    username,
    password,
    role,
    position,
    phone_number,
    address,
  }) {
    const exists = await Staff.findOne({ username });

    if (exists) throw new CustomError("Username already taken", 400);

    const hashed = await this.bcrypt.hashPassword(password);

    await Staff.create({
      first_name,
      last_name,
      username,
      password: hashed,
      role,
      position,
      phone_number,
      address,
    });

    return {
      success: true,
      employee: await Staff.findOne({ username }, { password: 0 }),
    };
  }

  async getAllStaff() {
    const allStaff = await Staff.find();
    return {
      success: true,
      employees: allStaff,
    };
  }

  async addTeacher({ staff_id, specialization, education, experience }) {
    const exists = await Staff.findOne({ _id: staff_id });

    if (!exists) throw new CustomError("Staff not found", 404);

    if (exists.role !== "teacher")
      throw new CustomError("The person is not a teacher", 400);

    const teacherExists = await Teacher.findOne({ staff_id });

    if (teacherExists) throw new CustomError("Teacher already added", 400);

    await Teacher.create({
      staff_id,
      specialization,
      education,
      experience,
    });

    return {
      success: true,
      teacher: await Teacher.findOne({ staff_id }).populate("staff_id"),
    };
  }

  async getAllTeachers() {
    const allTeachers = await Teacher.find().populate("staff_id");
    return {
      success: true,
      teachers: allTeachers,
    };
  }
}
