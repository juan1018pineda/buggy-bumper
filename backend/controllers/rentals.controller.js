import db from "../db.js";
import { Rentals } from "../models/index.js";

export const getAllRentals = (req, res) => {
  db.connect();

  Rentals.find((err, data) => {
    if (err) res.status(500).send();
    if (data.length === 0) res.status(204);
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

export const updateRental = (req, res) => {
  const { id } = req.params;
  const updatedRental = req.body;

  db.connect();

  Rentals.findById(id, (err, rentals) => {
    if (err) res.status(500).send(err);
    Rentals.updateOne(rentals, updatedRental, (err, value) => {
      if (err) res.status(500).send(err);
      res.status(200).send(value);
    });
  });
};

export const deleteRental = (req, res) => {
  const { id } = req.params;
  db.connect();

  Rentals.findById(id, (err, rentals) => {
    if (err) res.status(404).send(err);
    rentals.remove((err, value) => {
      if (err) res.status(500).send(err);
      res.send(value);
    });
  });
};
