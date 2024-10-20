const express = require("express");
// import express from "express";
const { getUser } = require("../controller/get/getUser");
const { createUser } = require("../controller/post/createUser");
const { apiSingIn } = require("../controller/get/Signin");
const { signOut } = require("../controller/post/signOut");
// import { apiSingIn } from "../controller/get/Signin";
// import { signOut } from "../controller/post/signOut";
const userRouter = express.Router();
userRouter
  .post("/api/signIn", apiSingIn)
  .post("/api/signup", createUser)
  .post("/api/signOut", signOut);
module.exports = userRouter;
