const { request, response } = require("express");
const { sql, pool } = require("../../database");

exports.updateRecord = async (request, response) => {
  const { description } = request.body;
  const { id } = request.params;
  try {
    const updateRecord = await pool` UPDATE Records
SET description=${description}
WHERE categoryid=${id};`;
    response.status(200).json(request.body);
  } catch (error) {
    response.status(400).json(error);
  }
};
