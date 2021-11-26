import express from "express";
import cors from "cors";

import multer from 'multer';
import path from 'path';
import { fileURLToPath } from "url"; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { carRouter, userRouter } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", carRouter, userRouter);

function dirname(meta) {
  return fileURLToPath(meta.url);
}

//configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/public"));
  },
  filename: function (req, file, cb) {
    console.log("Filename", req.body);
    cb(null, `${req.body.name}.${file.mimetype.split("/")[1]}`);
  },
});
const upload = multer({ storage: storage });

// Configure static files
//app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

app.post("/upload", upload.single("file"), function (req, res, next) {
  console.log("/upload", req.file);
  res.send("imagen subida");
});

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log("Initialized server");
});
