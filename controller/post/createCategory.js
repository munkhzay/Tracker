const { request, response } = require("express");
const { sql } = require("../../database");

exports.createCategory = async (request, response) => {
  const { categoryname, description } = request.body;

  try {
    await sql` INSERT INTO Category (categoryname, description)
VALUES (${categoryname}, ${description})`;
    response.status(201).json("true");
  } catch (error) {
    response.status(400).json(error);
  }
  console.log(request.body);
};
