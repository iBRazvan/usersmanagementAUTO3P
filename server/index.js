import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js";

const app = express();
app.use(cors({ origin: true, credentials: true }));
// middlewares
app.use(express.json());
app.use("/users", userRoutes);

const CONNECTION_URL =
  "mongodb+srv://admin:admin123@auto3p.ggnvozq.mongodb.net/?retryWrites=true&w=majority";
const PORT = 8080;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
