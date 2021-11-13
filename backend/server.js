import express from "express";

import { carsController, usersController } from "./controllers/index.js";

import { carRouter, userRouter } from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/", carRouter, userRouter);

app.listen(3004, () => console.log("Listening on port 3004"));
