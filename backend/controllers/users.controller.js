import mongoose from "mongoose";

import db from "../db.js";
import { Users } from "../models/index.js";
import bcrypt from "bcrypt";
import { response } from "express";

export const getAllUsers = (req, res) => {
  db.connect();

  Users.find((err, data) => {
    if (err) res.status(500).send();
    if (data.length === 0) res.status(204);
    res.status(200).send(data);
  });
};

export const login = async (req, res) => {
  db.connect();
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (user) {
    const frontInput = email + password;
    const checkLogin = await bcrypt.compare(frontInput, user.userPass);
    if (checkLogin) {
      res.send({ message: "login sucess", auth: true });
    } else {
      res.send({ message: "Wrong email or password", auth: false });
    }
  } else {
    res.send({ message: "Wrong email or password", auth: false });
  }
};

export const getOneUser = (req, res) => {
  db.connect();

  const { email } = req.params;
  Users.findOne({ email }, (err, data) => {
    if (err) res.sendStatus(404);
    res.status(200).json(data);
  });
};

export const createUser = (req, res) => {
  db.connect();
  const { email, password } = req.body;
  const user = email + password;

  bcrypt.hash(user, 10).then(function (hash) {
    req.body.userPass = hash;
    if (req.body) {
      Users.create(req.body, (err, user) => {
        if (err) res.sendStatus(500);
        res.status(201).json(user);
      });
    }
  });
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
