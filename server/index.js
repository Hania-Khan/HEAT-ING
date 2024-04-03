import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { mongoUrl } from "./keys.js";
import userApplicationRoute from "./routes/userApplication.js";
import grantApplicationRoute from "./routes/grantApplications.js";
import messageRoutes from "./routes/messageRoutes.js"
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(userApplicationRoute);
app.use(grantApplicationRoute);
app.use(messageRoutes);
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Not Connected to DB", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
