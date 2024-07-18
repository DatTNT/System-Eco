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

//init routes
app.get("/", (req, res, next) => {
  //   const strCompress = "Hello Fantipjs";

  return res.status(200).json({
    message: "Welcome Fantipjs",
    // metadata: strCompress.repeat(10000),
  });
});

//handling error

module.exports = app;
