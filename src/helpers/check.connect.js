"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;

//count Connections
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of Connection: ${numConnection}`);
};

//check over loaded connections
const checkOverloadedConnections = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    //Example maxium number of connections based on number of cores
    const maxConnections = numCores * 5;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);
    if (numConnection > maxConnections) {
    }
  }, _SECONDS); // Monitor every 5 seconds
};

module.exports = {
  countConnect,
  checkOverloadedConnections,
};
