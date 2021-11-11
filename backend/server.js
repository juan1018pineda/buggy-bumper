import express from "express";

import { carsController, usersController } from "./controllers/index.js";

import { carRoutes, userRoutes } from "./routes/index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Buggy Bumper, INC");
});

//car actions
app.get(carRoutes.GET, carsController.getAllCars);
app.get(carRoutes.GET_ONE, carsController.getOneCar);
app.post(carRoutes.CREATE, carsController.createCar);
app.put(carRoutes.UPDATE, carsController.updateCar);
app.delete(carRoutes.DELETE, carsController.deleteCar);

//user actions
app.get(userRoutes.GET, usersController.getAllUsers);
app.get(userRoutes.GET_ONE, usersController.getOneUser);
app.post(userRoutes.CREATE, usersController.createUser);
app.put(userRoutes.UPDATE, usersController.updateUser);
app.delete(userRoutes.DELETE, usersController.deleteUser);

app.listen(3004, () => console.log("Listening on port 3004"));
