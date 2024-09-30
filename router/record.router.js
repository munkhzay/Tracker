const express = require("express");
const { getRecord } = require("../controller/get/getRecord");
const { createRecord } = require("../controller/post/createRecord");
const { updateRecord } = require("../controller/update/updateRecord");
const { deleteRecord } = require("../controller/delete/deleteRecord");
const { join } = require("../controller/join");
const recordRouter = express.Router();
recordRouter
  .get("/api/transaction", getRecord)
  .post("/api/transaction", createRecord)
  .put("/api/transaction/:id", updateRecord)
  .delete("/api/transaction/delete", deleteRecord)
  .get("/api/transaction/join", join);
module.exports = recordRouter;
