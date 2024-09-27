const express = require("express");
// import express from "express";
const userRouter = require("./router/user.router");
const categoryRouter = require("./router/category.router");
const recordRouter = require("./router/record.router");
// import { userRouter } from "./router/user.router";
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(categoryRouter);
app.use(recordRouter);
const port = 8070;
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
