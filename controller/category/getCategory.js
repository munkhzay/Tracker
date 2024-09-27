const { request, response } = require("express");
const { sql } = require("../../database");

exports.getCategory = async (request, response) => {
  try {
    const getCategory = await sql`SELECT * FROM  Category;`;
    response.status(200).json({ user: getCategory });
  } catch (error) {
    response.status(400).json(error);
  }
};
