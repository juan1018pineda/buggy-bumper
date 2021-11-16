import express from "express";
import cors from "cors";

import { carsController, usersController } from "./controllers/index.js";

import { carRouter, userRouter } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", carRouter, userRouter);

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log("Initialized server");
});
