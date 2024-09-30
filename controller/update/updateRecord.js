const { request, response } = require("express");
const { sql } = require("../../database");

exports.updateRecord = async (request, response) => {
  const { description } = request.body;
  const { id } = request.params;
  try {
    const updateRecord = await sql` UPDATE Records
SET description=${description}
WHERE categoryid=${id};`;
    response.status(200).json(request.body);
  } catch (error) {
    response.status(400).json(error);
  }
};
