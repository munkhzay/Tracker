// import express from "express";
const express = require("express");
const { getCategory } = require("../controller/get/getCategory");
const { createCategory } = require("../controller/post/createCategory");
const { updateCategory } = require("../controller/update/updateCategory");
const { deleteCategory } = require("../controller/delete/deleteCategory");
const categoryRouter = express.Router();
categoryRouter
  .get("/api/category", getCategory)
  .post("/api/category", createCategory)
  .put("/api/category/:id", updateCategory)
  .delete("/api/category/:id", deleteCategory);

module.exports = categoryRouter;
