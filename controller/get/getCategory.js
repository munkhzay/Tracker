const { request, response } = require("express");
const { sql, pool } = require("../../database");

exports.getCategory = async (request, response) => {
  try {
    const getCategory = await pool`SELECT * FROM  category;`;
    response.status(200).json(getCategory);
  } catch (error) {
    response.status(400).json(error);
  }
};
