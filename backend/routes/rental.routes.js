import express from "express";
import { rentalsController } from "../controllers/index.js";

const router = express.Router();

const rentalRoutes = {
  GET: "/rentals",
  GET_ONE: "/rentals/:id",
  CREATE: "/rentals/create",
  UPDATE: "/rentals/update/:id",
  DELETE: "/rentals/delete/:id",
};

router.get(rentalRoutes.GET, rentalsController.getAllRentals);
router.get(rentalRoutes.GET_ONE, rentalsController.getRental);
router.post(rentalRoutes.CREATE, rentalsController.createRental);
router.put(rentalRoutes.UPDATE, rentalsController.updateRental);
router.delete(rentalRoutes.DELETE, rentalsController.deleteRental);

export default router;
