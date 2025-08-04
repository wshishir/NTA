import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(8800, () => {
  console.log("Server is running on port: 8800");
});
