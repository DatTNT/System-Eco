"use strict";

const mongoose = require("mongoose");

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of Connection: ${numConnection}`);
};

module.exports = {
  countConnect,
};
