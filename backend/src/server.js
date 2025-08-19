import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //this middleware will parse json bodies
app.use(rateLimiter);

// //simple middleware
// app.use((req, res, next)  =>{
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next()
// });

app.use("/api/notes", notesRoutes); 


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });  
});
