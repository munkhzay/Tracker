const { request, response } = require("express");
const { sql } = require("../../database");

exports.getRecord = async (request, response) => {
  try {
    const getRecord = await sql`SELECT * FROM records`;
    response.status(200).json(getRecord);
  } catch (error) {
    response.status(400).json(error);
  }
};
