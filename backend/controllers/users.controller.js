import mongoose from "mongoose";

import db from "../db.js";
import { Users } from "../models/index.js";

export const getAllUsers = (req, res) => {
  db.connect();

  Users.find((err, data) => {
    if (err) res.status(500).send();
    if (data.length === 0) res.status(204).send();
    res.status(200).send(data);
  });
};

export const getOneUser = (req, res) => {
  db.connect();

  const { id } = req.params;

  Users.findById(id, (err, data) => {
    if (err) res.sendStatus(404);
    res.status(200).json(data);
  });
};

export const createUser = (req, res) => {
  db.connect();
  if (req.body) {
    Users.create(req.body, (err, user) => {
      if (err) res.sendStatus(500);
      res.status(201).json(user);
    });
  }
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  db.connect();

  Users.findById(id, (err, users) => {
    if (err) res.status(500).send(err);
    Users.updateOne(users, updatedUser, (err, value) => {
      if (err) res.status(500).send(err);
      res.status(200).send(value);
    });
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  db.connect();

  Users.findById(id, (err, users) => {
    if (err) res.status(404).send(err);
    users.remove((err, value) => {
      if (err) res.status(500).send(err);
      res.send(value);
    });
  });
};
