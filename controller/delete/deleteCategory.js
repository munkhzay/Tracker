const { request, response } = require("express");
const { sql } = require("../../database");

exports.deleteCategory = async (request, response) => {
  const { categoryId } = request.body;
  try {
    const data = await sql`DELETE FROM Category
WHERE categoryid=${categoryId}`;
    response.status(200).json(data);
  } catch (error) {
    response.status(400).json(error);
  }
};
