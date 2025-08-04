import express from "express"
import notesRouter from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});