import express from "express";
import { carsController } from "../controllers/index.js";

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
router.post(carRoutes.CREATE, carsController.createCar);
router.put(carRoutes.UPDATE, carsController.updateCar);
router.delete(carRoutes.DELETE, carsController.deleteCar);

export default router;
