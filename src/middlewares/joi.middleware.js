import JoiService from "../services/joi.service.js";

const joiService = new JoiService();

export const authCheckMiddleware = (req, res, next) => {
  try {
    const { username, password } = req.body;
    joiService.loginValidate(username, password);
    next();
  } catch (error) {
    next(error);
  }
};

export const addStaffCheckMiddleware = (req, res, next) => {
  try {
    joiService.addStaffValidate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export const addTeacherCheckMiddleware = (req, res, next) => {
  try {
    joiService.addTeacherValidate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export const addStudentCheckMiddleware = (req, res, next) => {
  try {
    joiService.addStudentValidate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export const addCourseCheckMiddleware = (req, res, next) => {
  try {
    joiService.addCourseValidate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export const addScheduleCheckMiddleware = (req, res, next) => {
  try {
    joiService.addScheduleValidate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export const addGroupCheckMiddleware = (req, res, next) => {
  try {
    joiService.addGroupValidate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export const addLessonCheckMiddleware = (req, res, next) => {
  try {
    joiService.addLessonValidate(req.body, req.user.id);
    next();
  } catch (error) {
    next(error);
  }
};

export const addAttendanceCheckMiddleware = (req, res, next) => {
  try {
    joiService.addAttendanceValidate(req.body, req.user.id);
    next();
  } catch (error) {
    next(error);
  }
};

export const addPaymentCheckMiddleware = (req, res, next) => {
  try {
    joiService.addPaymentValidate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
