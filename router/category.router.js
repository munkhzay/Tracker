// import express from "express";
const express = require("express");
const { getCategory } = require("../controller/category/getCategory");
const { createCategory } = require("../controller/category/createCategory");
const { updateCategory } = require("../controller/category/updateCategory");
const categoryRouter = express.Router();
categoryRouter
  .get("/api/category", getCategory)
  .post("/api/category", createCategory)
  .put("/api/category/:id", updateCategory);

module.exports = categoryRouter;
