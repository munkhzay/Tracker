const { request, response } = require("express");
const { sql } = require("../../database");

exports.deleteRecord = async (request, response) => {
  const { id } = request.body;
  try {
    await sql`DELETE FROM Records
WHERE userid=${id}`;
    response.status(200).json({ success: "true" });
  } catch (error) {
    response.status(400).json(error);
  }
};
