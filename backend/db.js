import mongoose from "mongoose";

const db = {
  connect: function () {
    //mongodb://localhost:27017/buggy-bumper
    mongoose.connect(
      "mongodb+srv://juan1018pineda:´Juapin2021.,@cluster0.uuvd0.mongodb.net/test",
      {
        useNewUrlParser: true,
      }
    );
    mongoose.connection.on("error", function (e) {
      console.error(e);
    });
  },
};

export default db;
