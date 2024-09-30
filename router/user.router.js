const express = require("express");
// import express from "express";
const { getUser } = require("../controller/get/getUser");
const { createUser } = require("../controller/post/createUser");
const { apiSingIn } = require("../controller/get/Signin");
const userRouter = express.Router();

userRouter.post("/api/signin", apiSingIn);
// .post("/api/signup", createUser)
module.exports = userRouter;
