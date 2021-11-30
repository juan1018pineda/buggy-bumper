import mongoose from "mongoose";

import db from "../db.js";
import { Cars } from "../models/index.js";

export const getAllCars = (req, res) => {
  db.connect();

  Cars.find((err, data) => {
    if (err) res.status(500).send();
    if (data.length === 0) res.status(204);
    res.status(200).send(data);
  });
};

export const getOneCar = (req, res) => {
  db.connect();

  const { id } = req.params;

  Cars.findById(id, (err, data) => {
    if (err) res.sendStatus(404);
    res.status(200).json(data);
  });
};

export const createCar = (req, res) => {
  db.connect();
  if (req.body) {
    Cars.create(req.body, (err, car) => {
      if (err) res.sendStatus(500);
      res.status(201).json(car);
    });
  }
};

export const updateCar = (req, res) => {
  const { id } = req.params;
  const updatedCar = req.body;

  db.connect();

  Cars.findById(id, (err, car) => {
    if (err) res.status(500).send(err);
    res.status(200).send(updatedCar);
    Cars.updateOne(car, updatedCar, (err, value) => {
      if (err) res.status(500).send(err);
      // res.status(200).send(value);
    });
  });
};

export const deleteCar = (req, res) => {
  const { id } = req.params;
  db.connect();

  Cars.findById(id, (err, cars) => {
    if (err) res.status(404).send(err);
    cars.remove((err, value) => {
      if (err) res.status(500).send(err);
      res.send(value);
    });
  });
};
