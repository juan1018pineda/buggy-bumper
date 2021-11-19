import express from "express";
import { usersController } from "../controllers/index.js";

const router = express.Router();

const userRoutes = {
  GET: "/users",
  GET_ONE: "/users/:email",
  LOGIN: "/users/login",
  CREATE: "/users/create",
  UPDATE: "/users/update/:id",
  DELETE: "/users/delete/:id",
};

router.get(userRoutes.GET, usersController.getAllUsers);
router.get(userRoutes.GET_ONE, usersController.getOneUser);
router.post(userRoutes.LOGIN, usersController.login);
router.post(userRoutes.CREATE, usersController.createUser);
router.put(userRoutes.UPDATE, usersController.updateUser);
router.delete(userRoutes.DELETE, usersController.deleteUser);

export default router;
