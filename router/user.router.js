const express = require("express");
// import express from "express";
const { getUser } = require("../controller/user/getUser");
const { createUser } = require("../controller/user/createUser");
const { apiSingIn } = require("../controller/user/Signin");
const userRouter = express.Router();

userRouter.post("/api/signin", apiSingIn);
// .post("/api/signup", createUser)
module.exports = userRouter;
