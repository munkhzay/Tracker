const { request, response } = require("express");
const { sql } = require("../../database");

exports.deleteRecord = async (request, response) => {
  const { id } = request.params;
  try {
    await sql`DELETE FROM Records
WHERE recordid=${id}`;
    response.status(200).json({ success: "true" });
  } catch (error) {
    response.status(400).json(error);
  }
};
