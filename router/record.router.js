const express = require("express");
const { getRecord } = require("../controller/record/getRecord");
const { createRecord } = require("../controller/record/createRecord");
const { updateRecord } = require("../controller/record/updateRecord");
const recordRouter = express.Router();
recordRouter
  .get("/api/transaction", getRecord)
  .post("/api/transaction", createRecord)
  .put("/api/transaction/:id", updateRecord);

module.exports = recordRouter;
