require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const compression = require("compression");
const morgan = require("morgan"); // Hiển thị thông tin request như số port màu gì, thời gian gửi 1 request
const app = express();

//init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init db
require("./dbs/init.mongodb");
// const { checkOverloadedConnections } = require("./helpers/check.connect");
// checkOverloadedConnections();
//init routes
app.use("/", require("./routers"));

//handling error

module.exports = app;
