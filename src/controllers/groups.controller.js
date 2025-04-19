import GroupService from "../services/groups.service.js";

export default class GroupController {
  constructor() {
    this.service = new GroupService();
  }

  async createNewGroup(req, res, next) {
    try {
      const newGroup = await this.service.createGroup(req.body);
      res.status(201).json(newGroup);
    } catch (error) {
      next(error);
    }
  }

  async getGroups(req, res, next) {
    try {
      const allGroups = await this.service.getAllGroups();
      res.status(200).json(allGroups);
    } catch (error) {
      next(error);
    }
  }
}
