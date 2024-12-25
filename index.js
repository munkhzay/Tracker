const express = require("express");
// import cors from "cors";
// import express from "express";
// import userRouter from "./router/user.router";
const cors = require("cors");
const userRouter = require("./router/user.router");
const categoryRouter = require("./router/category.router");
const recordRouter = require("./router/record.router");
// import { userRouter } from "./router/user.router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(categoryRouter);
app.use(recordRouter);

const port = 8070;
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  // console.log("tracker-front-omega.vercel.app");
});
