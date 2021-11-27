import express from "express";
import { carsController } from "../controllers/index.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function dirname(meta) {
  return fileURLToPath(meta.url);
}

//configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public"));
  },
  filename: function (req, file, cb) {
    console.log("Filename", req.body);
    cb(null, `${req.body.carType}.${file.mimetype.split("/")[1]}`);
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

const carRoutes = {
  GET: "/cars",
  GET_ONE: "/cars/:id",
  CREATE: "/cars/create",
  UPDATE: "/cars/update/:id",
  DELETE: "/cars/delete/:id",
};

router.get(carRoutes.GET, carsController.getAllCars);
router.get(carRoutes.GET_ONE, carsController.getOneCar);
router.post(carRoutes.CREATE, upload.single("file"), carsController.createCar);
router.put(carRoutes.UPDATE, upload.single("file"), carsController.updateCar);
router.delete(carRoutes.DELETE, carsController.deleteCar);

export default router;
