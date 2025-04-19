import { Group } from "../models/groups.models.js";
import { Schedule } from "../models/schedule.models.js";
import CustomError from "./error.service.js";

export default class ScheduleService {
  async createSchedule({ group_id, days, start_time, end_time, room }) {
    const group = await Group.findById(group_id);

    if (!group) throw new CustomError("Group not found", 404);

    const newSchedule = await Schedule.create({
      group_id,
      days,
      start_time,
      end_time,
      room,
    });

    return {
      success: true,
      schedule: newSchedule.toObject(),
    };
  }

  async getAllSchedule() {
    const allSchedule = await Schedule.find().populate("group_id");

    return {
      success: true,
      schedule: allSchedule,
    };
  }
}
