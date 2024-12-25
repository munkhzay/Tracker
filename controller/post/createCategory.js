const { request, response } = require("express");
const { sql, pool } = require("../../database");

exports.createCategory = async (request, response) => {
  const { categoryname, description } = request.body;

  try {
    const data = await pool` INSERT INTO Category (categoryname, description)
VALUES (${categoryname}, ${description})
RETURNING *`;
    response.status(201).json(data);
  } catch (error) {
    response.status(400).json(error);
  }
  console.log(request.body);
};
