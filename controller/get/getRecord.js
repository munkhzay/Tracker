const { request, response } = require("express");
const { sql, pool } = require("../../database");

exports.getRecord = async (_request, response) => {
  try {
    const getRecord = await pool`SELECT * FROM records
`;
    response.status(200).json(getRecord);
  } catch (error) {
    response.status(400).json(error);
  }
};
