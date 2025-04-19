import { attendance_routes } from "./attendance.routes.js";
import { authRoute } from "./auth.routes.js";
import { courseRoute } from "./courses.routes.js";
import { groupRoutes } from "./groups.routes.js";
import { lessonRoutes } from "./lessons.routes.js";
import { paymentRoute } from "./payments.routes.js";
import { scheduleRoute } from "./schedule.routes.js";
import { staffRoute } from "./staff.routes.js";
import { studentRoute } from "./student.routes.js";

export const allRoutes = () => [
  authRoute,
  staffRoute,
  studentRoute,
  courseRoute,
  scheduleRoute,
  groupRoutes,
  lessonRoutes,
  attendance_routes,
  paymentRoute,
];
