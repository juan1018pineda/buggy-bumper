import express from "express";
import cors from "cors";

// import multer from 'multer';
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { carRouter, userRouter, rentalsRouter } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", carRouter, userRouter, rentalsRouter);

app.get("/", (req, res) => {
  res.send("<h1>Buggy Bumper API</h1>");
});

// Configure static files
app.use(express.static(path.join(__dirname, "/public")));

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log("Initialized server");
});
