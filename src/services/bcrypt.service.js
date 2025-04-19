import bcrypt from "bcrypt";

export default class BcryptService {
  constructor() {
    this.bcr = bcrypt;
    this.salt = 12;
  }

  async hashPassword(password) {
    return await this.bcr.hash(password, this.salt);
  }

  async ComparePasswords(password, hashedPassword) {
    return await this.bcr.compare(password, hashedPassword);
  }
}
