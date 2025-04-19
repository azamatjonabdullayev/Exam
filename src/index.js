import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import { createSuperAdmin } from "./scripts/admin.create.js";
import { allRoutes } from "./routes/all.routes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", allRoutes());
app.use((_, res) => res.status(404).send("PAGE NOT FOUND"));
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "INTERNAL SERVER ERROR");
});

const initServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");
    await createSuperAdmin(
      "Azamat",
      "Abdullayev",
      "zeonx",
      "12345678",
      "superadmin",
      "superadmin",
      "+998995371536",
      "Ferghana"
    );
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error(error.name, error.message);
    process.exit(1);
  }
};

await initServer();
