const { request } = require("express");
const { sql, pool } = require("../../database");

exports.updateCategory = async (request, response) => {
  const { categoryname } = request.body;
  const { id } = request.params;

  try {
    const updateCategory = await sql`UPDATE category
  SET categoryname=${categoryname}
  WHERE categoryid=${id};`;
    response.status(200).json(updateCategory);
  } catch (error) {
    response.status(400).json(error);
  }
};
