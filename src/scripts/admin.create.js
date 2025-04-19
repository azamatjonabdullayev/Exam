import { Staff } from "../models/staff.models.js";
import BcryptService from "../services/bcrypt.service.js";

export const createSuperAdmin = async (
  first_name,
  last_name,
  username,
  password,
  role,
  position,
  phone_number,
  address
) => {
  const bcrypt = new BcryptService();
  const hashedPassword = await bcrypt.hashPassword(password);

  await Staff.create({
    first_name,
    last_name,
    username,
    password: hashedPassword,
    role,
    position,
    phone_number,
    address,
  });

  console.log("Superadmin created successfully");
};
