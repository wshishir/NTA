import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
