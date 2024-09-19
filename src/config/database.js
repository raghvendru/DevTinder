const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://raghavendr:12345@cluster0.npcym.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
