import express from "express"

const app = express();

app.get("/api/notes", (req, res) => {
  res.send("Have the notes");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});