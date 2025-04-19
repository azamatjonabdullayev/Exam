import Joi from "joi";
import CustomError from "./error.service.js";

export default class JoiService {
  constructor() {
    const uzbekPhoneRegex =
      /^(?:\+998|998)?[-\s]?(9[01345789])[-\s]?(\d{3})[-\s]?(\d{2})[-\s]?(\d{2})$/;

    this.loginSchema = Joi.object({
      username: Joi.string().required().min(4),
      password: Joi.string().required().min(8),
    });

    this.staffCreateSchema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      username: Joi.string().min(4).required(),
      password: Joi.string().min(8).required(),
      role: Joi.string().required(),
      position: Joi.string().required(),
      phone_number: Joi.string().required().regex(uzbekPhoneRegex),
      address: Joi.string().required(),
    });

    this.teacherShema = Joi.object({
      staff_id: Joi.string().required(),
      specialization: Joi.string().required(),
      education: Joi.string().required(),
      experience: Joi.number().required(),
    });

    this.createStudentSchema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      username: Joi.string().min(4).required(),
      password: Joi.string().min(8).required(),
      phone_number: Joi.string().regex(uzbekPhoneRegex).required(),
      address: Joi.string().required(),
      birth_date: Joi.date().required(),
      status: Joi.string().required(),
    });

    this.createCourseSchema = Joi.object({
      course_name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      duration: Joi.number().required(),
      level: Joi.string().required(),
    });

    this.createScheduleSchema = Joi.object({
      group_id: Joi.string().required(),
      days: Joi.array().items(Joi.string()).required(),
      start_time: Joi.string().required(),
      end_time: Joi.string().required(),
      room: Joi.string().required(),
    });

    this.createGroupSchema = Joi.object({
      group_name: Joi.string().required(),
      course_id: Joi.string().required(),
      teacher_id: Joi.string().required(),
      start_date: Joi.date().required(),
      end_date: Joi.date().required(),
      max_students: Joi.number().required(),
      status: Joi.string().required(),
    });

    this.createLessonSchema = Joi.object({
      group_id: Joi.string().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      lesson_date: Joi.date().required(),
      start_time: Joi.string().required(),
      end_time: Joi.string().required(),
      room: Joi.string().required(),
      created_by: Joi.string().required(),
    });

    this.createAttendanceSchema = Joi.object({
      lesson_id: Joi.string().required(),
      student_id: Joi.string().required(),
      status: Joi.string().required(),
      created_by: Joi.string().required(),
    });

    this.createPaymentSchema = Joi.object({
      student_id: Joi.string().required(),
      group_id: Joi.string().required(),
      amount: Joi.number().required(),
      payment_date: Joi.date().required(),
      payment_method: Joi.string().required(),
      description: Joi.string().required(),
    });
  }

  loginValidate(username, password) {
    const { error } = this.loginSchema.validate({ username, password });

    if (error) throw new CustomError(error.details[0].message, 400);
  }

  addStaffValidate({
    first_name,
    last_name,
    username,
    password,
    role,
    position,
    phone_number,
    address,
  }) {
    const { error } = this.staffCreateSchema.validate({
      first_name,
      last_name,
      username,
      password,
      role,
      position,
      phone_number,
      address,
    });

    if (error) throw new CustomError(error.details[0].message, 400);
  }

  addTeacherValidate({ staff_id, specialization, education, experience }) {
    const { error } = this.teacherShema.validate({
      staff_id,
      specialization,
      education,
      experience,
    });

    if (error) throw new CustomError(error.details[0].message, 400);
  }

  addStudentValidate({
    first_name,
    last_name,
    username,
    password,
    phone_number,
    address,
    birth_date,
    status,
  }) {
    const { error } = this.createStudentSchema.validate({
      first_name,
      last_name,
      username,
      password,
      phone_number,
      address,
      birth_date,
      status,
    });

    if (error) throw new CustomError(error.details[0].message, 400);
  }

  addCourseValidate({ course_name, description, price, duration, level }) {
    const { error } = this.createCourseSchema.validate({
      course_name,
      description,
      price,
      duration,
      level,
    });

    if (error) throw new CustomError(error.details[0].message, 400);
  }

  addScheduleValidate({ group_id, days, start_time, end_time, room }) {
    const { error } = this.createScheduleSchema.validate({
      group_id,
      days,
      start_time,
      end_time,
      room,
    });

    if (error) throw new CustomError(error.details[0].message, 400);
  }

  addGroupValidate({
    group_name,
    course_id,
    teacher_id,
    start_date,
    end_date,
    max_students,
    status,
  }) {
    const { error } = this.createGroupSchema.validate({
      group_name,
      course_id,
      teacher_id,
      start_date,
      end_date,
      max_students,
      status,
    });

    if (error) throw new CustomError(error.details[0].message, 400);
  }

  addLessonValidate(
    { group_id, title, description, lesson_date, start_time, end_time, room },
    created_by
  ) {
    const { error } = this.createLessonSchema.validate({
      group_id,
      title,
      description,
      lesson_date,
      start_time,
      end_time,
      room,
      created_by,
    });

    if (error) throw new CustomError(error.details[0].message, 400);
  }

  addAttendanceValidate({ lesson_id, student_id, status }, created_by) {
    const { error } = this.createAttendanceSchema.validate({
      lesson_id,
      student_id,
      status,
      created_by,
    });

    if (error) throw new CustomError(error.details[0].message, 400);
  }

  addPaymentValidate({
    student_id,
    group_id,
    amount,
    payment_date,
    payment_method,
    description,
  }) {
    const { error } = this.createPaymentSchema.validate({
      student_id,
      group_id,
      amount,
      payment_date,
      payment_method,
      description,
    });

    if (error) throw new CustomError(error.details[0].message, 400);
  }
}
