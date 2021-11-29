import db from "../db.js";
import { Rentals } from "../models/index.js";

export const getAllRentals = (req, res) => {
  db.connect();

  Rentals.find((err, data) => {
    if (err) res.status(500).send();
    if (data.length === 0) res.status(204).send();
    res.status(200).send(data);
  });
};

export const getRental = (req, res) => {
  db.connect();

  const { id } = req.params;

  Rentals.findById(id, (err, data) => {
    if (err) res.sendStatus(404);
    res.status(200).json(data);
  });
};

export const createRental = (req, res) => {
  db.connect();
  if (req.body) {
    Rentals.create(req.body, (err, rental) => {
      if (err) res.sendStatus(500);
      res.status(201).json(rental);
    });
  }
};
