const { request, response } = require("express");
const { sql } = require("../../database");

exports.deleteCategory = async (request, response) => {
  const { id } = request.params;
  console.log(id);

  try {
    const data = await sql`DELETE FROM category
WHERE categoryid=${id}`;
    response.status(200).json(data);
  } catch (error) {
    response.status(400).json(error);
  }
};
