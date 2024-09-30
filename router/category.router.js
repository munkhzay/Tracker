// import express from "express";
const express = require("express");
const { getCategory } = require("../controller/get/getCategory");
const { createCategory } = require("../controller/post/createCategory");
const { updateCategory } = require("../controller/update/updateCategory");
const categoryRouter = express.Router();
categoryRouter
  .get("/api/category", getCategory)
  .post("/api/category", createCategory)
  .put("/api/category/:id", updateCategory);

module.exports = categoryRouter;
